"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const project_1 = __importDefault(require("./routes/project"));
const message_1 = __importDefault(require("./routes/message"));
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: [
        'https://daisy-portfolio-g97xmi3hs-daisychoi1995s-projects.vercel.app',
        'http://localhost:5173',
    ],
}));
app.use(express_1.default.json());
app.use('/api/v1/projects', project_1.default);
app.use('/api/v1/messages', message_1.default);
app.listen(PORT, () => {
    console.log('API server listening on port', PORT);
});
exports.default = app;
