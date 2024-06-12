import express from 'express';
import { OwnersController } from '../controllers/owners.controller';

const ownersRouter=express.Router();

ownersRouter.get("/", OwnersController.getAll);
ownersRouter.get("/:id", OwnersController.getOwner);
ownersRouter.post("/", OwnersController.insert);
ownersRouter.put("/", OwnersController.update);
ownersRouter.delete("/", OwnersController.delete);

export {ownersRouter};