import { Request, Response } from 'express';
import HttpException from '../errors/HttpException';

const errorHandler = (
  err: HttpException,
  _req: Request,
  res: Response,
) => {
  if (err instanceof HttpException) {
    return res.status(err.status).json({ error: err.message });
  } 
  console.error(err);
  res.status(500).json({ error: 'Internal server error.' });
};

export default errorHandler;