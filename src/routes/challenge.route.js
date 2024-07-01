import express from "express";
import asyncHandler from 'express-async-handler';
import { createChallenge } from '../controllers/challenge.controller.js';

export const challengeRouter = express.Router();

challengeRouter.post('/newChallenge', createChallenge);

export default challengeRouter;