import express from 'express';
import { OwnersController } from '../controllers/owners.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { editOwnersMiddleware } from '../middlewares/edit.owners.middleware';

const ownersRouter=express.Router();

ownersRouter.get("/", authMiddleware, OwnersController.getAll);
ownersRouter.get("/:id", authMiddleware, editOwnersMiddleware, OwnersController.getOwner);
ownersRouter.post("/", authMiddleware, editOwnersMiddleware, OwnersController.insert);
ownersRouter.put("/", authMiddleware, editOwnersMiddleware, OwnersController.update);
ownersRouter.delete("/:id", authMiddleware, editOwnersMiddleware, OwnersController.delete);

export {ownersRouter};