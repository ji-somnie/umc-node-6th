import express from "express";
import asyncHandler from 'express-async-handler';
import { createStore } from '../controllers/store.controller.js';

export const storeRouter = express.Router();

storeRouter.post('/newStore', createStore);

export default storeRouter;