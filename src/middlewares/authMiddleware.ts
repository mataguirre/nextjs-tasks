import jwt from 'jsonwebtoken';
import { secret } from '../libs/jwt';
import { NextFunction } from 'express';
import { NextApiRequest, NextApiResponse } from 'next';

export const authMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextFunction,
) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: 'No estás autorizado',
    });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err)
      return res.status(401).json({
        message: 'No estás autorizado',
      });

    req.currentUserId = decoded.id;
    next();
  });
};
