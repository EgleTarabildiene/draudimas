"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app");
dotenv_1.default.config();
console.log("Aplikacija paleista");
app_1.app.listen(process.env.PORT, () => {
    console.log("Express serveris paleistas, ant uosto: " + process.env.PORT);
});
