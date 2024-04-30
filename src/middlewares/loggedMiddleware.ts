import { NextFunction } from 'express';
import { NextApiRequest, NextApiResponse } from 'next';

export const loggedMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextFunction,
): void => {
  const userLogged = req.cookies.token;

  if (userLogged != null) {
    return res.json({
      message: 'Usuario ya loggeado',
    });
  }
  next();
};
