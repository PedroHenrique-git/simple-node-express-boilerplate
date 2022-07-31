import express from 'express';
import { getAllExamples } from '../controllers/example';

const exampleRouter = express.Router();

exampleRouter.get('/', getAllExamples);

export { exampleRouter };
