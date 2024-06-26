"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editOwnersMiddleware = void 0;
const editOwnersMiddleware = (req, res, next) => {
    if (req.user == null) {
        return res.status(401).json({
            'text': 'Vartotojas nėra prisijungęs'
        });
    }
    console.log(req.user);
    if (req.user.type == 0 || req.user.type == 1) {
        next();
    }
    else {
        return res.status(401).json({
            'text': 'Vartotojas neturi teisių atlikti veiksmus'
        });
    }
};
exports.editOwnersMiddleware = editOwnersMiddleware;
