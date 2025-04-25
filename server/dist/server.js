"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const project_js_1 = __importDefault(require("./routes/project.js"));
const message_js_1 = __importDefault(require("./routes/message.js"));
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
const allowedOrigins = [
    'https://daisy-portfolio-4fuhpugy4-daisychoi1995s-projects.vercel.app',
    'https://daisy-portfolio-g97xmi3hs-daisychoi1995s-projects.vercel.app',
    'https://daisy-portfolio-production.up.railway.app',
    'http://localhost:5173',
];
app.use((0, cors_1.default)({
    origin: '*',
    credentials: true,
    methods: '*',
}));
app.use(express_1.default.json());
app.use('/api/v1/projects', project_js_1.default);
app.use('/api/v1/messages', message_js_1.default);
app.listen(PORT, () => {
    console.log('API server listening on port', PORT);
});
exports.default = app;
