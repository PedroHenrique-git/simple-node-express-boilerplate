import { Request, Response } from 'express';
import { exampleModel } from '../models/example';

function getAllExamples(_: Request, res: Response) {
  const data = new Array(5).fill(exampleModel);
  res.status(200).json(data);
}

export { getAllExamples };
