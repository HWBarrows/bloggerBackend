"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const alpha = "abcdefghijklmnopqrstuvwxyz ";
const upperAlpha = alpha.toUpperCase();
const symbolsNumber = "+-().1234567890?!*&% ";
const validator = [
    (0, express_validator_1.body)("content").isWhitelisted(`${alpha}${upperAlpha}${symbolsNumber}`).withMessage("only-letters-from-the-Latin-alphabet-are-accepted"),
    (0, express_validator_1.body)("heading").isWhitelisted(`${alpha}${upperAlpha}${symbolsNumber}`).withMessage("only-letters-from-the-Latin-alphabet-are-accepted"),
    (0, express_validator_1.body)("author").isWhitelisted(`${alpha}${upperAlpha}`).withMessage("only-letters-from-the-Latin-alphabet-are-accepted"),
    (0, express_validator_1.body)("topic").isWhitelisted(`${alpha}${upperAlpha}`).withMessage("only-letters-from-the-Latin-alphabet-are-accepted"),
];
exports.default = validator;
//# sourceMappingURL=validator.js.map