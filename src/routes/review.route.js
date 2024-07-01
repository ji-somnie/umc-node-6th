import express from "express";
import asyncHandler from 'express-async-handler';
import { createReview } from '../controllers/review.controller.js';

export const reviewRouter = express.Router();

reviewRouter.post('/newReview', createReview);

export default reviewRouter;