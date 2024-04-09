import { NextApiRequest, NextApiResponse } from 'next';
import { Prisma, PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcrypt';
import { createAccessToken } from '../../libs/jwt';

const prisma = new PrismaClient();

const authController = {
  loginAsync: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      // Extract necessary data
      const { email, password } = req.body;

      // Search for the user in the DB
      const user = await prisma.user.findFirst({
        where: {
          email,
        },
      });

      // If user not found, return error
      if (!user) {
        return res.status(404).json({
          message: 'Este usuario aún no se encuentra registrado',
        });
      }

      // Verify password
      const valid = await bcrypt.compare(password, user.passwordHash);

      // If password is invalid, return error
      if (!valid) {
        return res.status(400).json({
          message: 'La contraseña es incorrecta',
        });
      }

      // If password is correct, create token for the user
      const token = await createAccessToken({ id: user.id });

      // Set cookies
      res.setHeader('Set-Cookie', [
        `token=${token}; HttpOnly; Secure; SameSite=None; Max-Age=${
          24 * 60 * 60
        }`,
        `userId=${user.id}; HttpOnly; Secure; SameSite=None; Max-Age=${
          24 * 60 * 60
        }`,
      ]);

      return res.json(user);
    } catch (error: any) {
      if (error.code === 'P2002') {
        return res.status(409).json({
          message: 'El usuario ya se encuentra registrado',
        });
      } else {
        return res.status(500).json({
          message: 'Error interno del servidor',
        });
      }
    }
  },
  registerAsync: async (data: Prisma.UserCreateInput) => {
    return await prisma.user.create({
      data,
    });
  },
};

export default authController;
