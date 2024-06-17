"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.auth;
        jsonwebtoken_1.default.verify(token, "kk59444gsd4r9+-eyery64er94ty9wer49erh4");
        next();
    }
    catch (error) {
        return res.status(401).json({
            'text': 'Nepateiktas arba neteisingas JWT'
        });
    }
};
exports.authMiddleware = authMiddleware;
