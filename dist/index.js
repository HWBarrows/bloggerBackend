"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_js_1 = __importDefault(require("./lib/database.js"));
const articleRouter_1 = __importDefault(require("./controllers/articleRouter"));
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
const validator_1 = __importDefault(require("./middlewares/validator"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
(0, database_js_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/articles', validator_1.default, articleRouter_1.default);
app.use(globalErrorHandler_1.default);
const PORT = process.env.PORT;
app.get('/', (req, res) => res.send('Hi Everybody!'));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map