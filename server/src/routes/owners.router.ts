import express from 'express';
import { OwnersController } from '../conrollers/owners.controller';

const ownersRouter=express.Router();

ownersRouter.get("/", OwnersController.getAll);
ownersRouter.post("/", OwnersController.insert);
ownersRouter.put("/", OwnersController.update);
ownersRouter.delete("/", OwnersController.delete);

export {ownersRouter};