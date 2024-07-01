import express from "express";
import asyncHandler from 'express-async-handler';
import { createMission } from '../controllers/mission.controller.js';

export const missionRouter = express.Router();

missionRouter.post('/newMission', createMission);

export default missionRouter;