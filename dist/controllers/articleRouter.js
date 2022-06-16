"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Article_1 = __importDefault(require("../models/Article"));
const articleRouter = express_1.default.Router();
articleRouter
    .get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const articles = yield Article_1.default.find(req.query);
    res.send(articles);
}))
    .get('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentArticle = yield Article_1.default.findById(req.params.id);
        if (!currentArticle) {
            return next({ status: 404, message: 'Article not found' });
        }
        else {
            res.send(currentArticle);
        }
    }
    catch (e) {
        next(e);
    }
}))
    .post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newArticle = yield Article_1.default.create(req.body);
        if (!newArticle) {
            return next({ status: 404, message: 'Invalid input' });
        }
        return res.send({ newArticle });
    }
    catch (error) {
        next({
            status: 400,
            error: 'Unable to complete operation, please try again'
        });
    }
}))
    .patch('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const options = { new: true, runValidators: true };
        const id = req.params.id;
        const editedArticle = yield Article_1.default.findByIdAndUpdate(id, req.body, options);
        if (!editedArticle) {
            return next({ status: 404, message: 'Article not found' });
        }
        res.send(editedArticle);
    }
    catch (error) {
        next({
            status: 400,
            error: 'Unable to complete operation, please try again'
        });
    }
}))
    .delete('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedArticle = yield Article_1.default.findById(req.params.id);
        if (!deletedArticle) {
            return next({ status: 404, message: 'Article not found' });
        }
        deletedArticle.remove();
        res.send({ ok: true });
    }
    catch (err) {
        next({
            status: 400,
            error: 'Unable to complete operation, please try again'
        });
    }
}));
exports.default = articleRouter;
//# sourceMappingURL=articleRouter.js.map