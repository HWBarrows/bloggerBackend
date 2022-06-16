"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const articleSchema = new Schema({
    heading: { type: String, required: true, unique: true },
    content: [{ type: String, required: true, unique: true }],
    photoUrl: { type: String, required: true },
    author: { type: String, required: true },
    topic: { type: String, required: true },
}, { timestamps: true });
const Article = model('article', articleSchema);
exports.default = Article;
//# sourceMappingURL=Article.js.map