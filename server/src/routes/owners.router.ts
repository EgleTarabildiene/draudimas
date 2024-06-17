import express from 'express';
import { OwnersController } from '../controllers/owners.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const ownersRouter=express.Router();

ownersRouter.get("/", OwnersController.getAll);
ownersRouter.get("/:id", authMiddleware, OwnersController.getOwner);
ownersRouter.post("/", authMiddleware, OwnersController.insert);
ownersRouter.put("/", authMiddleware, OwnersController.update);
ownersRouter.delete("/:id", authMiddleware, OwnersController.delete);

export {ownersRouter};