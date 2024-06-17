"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ownersRouter = void 0;
const express_1 = __importDefault(require("express"));
const owners_controller_1 = require("../controllers/owners.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const ownersRouter = express_1.default.Router();
exports.ownersRouter = ownersRouter;
ownersRouter.get("/", owners_controller_1.OwnersController.getAll);
ownersRouter.get("/:id", auth_middleware_1.authMiddleware, owners_controller_1.OwnersController.getOwner);
ownersRouter.post("/", auth_middleware_1.authMiddleware, owners_controller_1.OwnersController.insert);
ownersRouter.put("/", auth_middleware_1.authMiddleware, owners_controller_1.OwnersController.update);
ownersRouter.delete("/:id", auth_middleware_1.authMiddleware, owners_controller_1.OwnersController.delete);
