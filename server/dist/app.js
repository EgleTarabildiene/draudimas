"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const skaiciuokle_router_1 = require("./routes/skaiciuokle.router");
const cors_middleware_1 = require("./middlewares/cors.middleware");
const owners_router_1 = require("./routes/owners.router");
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.urlencoded());
app.use(express_1.default.json());
app.use(cors_middleware_1.corsHeaders);
app.use('/skaiciuokle', skaiciuokle_router_1.skaiciuokleRouter);
app.use('/owners', owners_router_1.ownersRouter);
