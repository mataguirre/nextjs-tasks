import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

export let secret: string = '';

if (!secret) {
  secret = uuidv4();
}

export const createAccessToken = (payload: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      secret,
      {
        expiresIn: '1d',
      },
      (err: Error | null, token?: string) => {
        if (err) reject(err);
        if (token) resolve(token);
      },
    );
  });
};
