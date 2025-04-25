"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const camelcase_keys_1 = __importDefault(require("camelcase-keys"));
const express_1 = __importDefault(require("express"));
const snakecase_keys_1 = __importDefault(require("snakecase-keys"));
const router = express_1.default.Router();
const prisma = new client_1.PrismaClient();
router.get('/', async (req, res) => {
    try {
        const messages = await prisma.messageExample.findMany();
        res.json((0, camelcase_keys_1.default)(messages, { deep: true }));
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching projects" });
    }
});
router.post('/', async (req, res) => {
    try {
        const newMessages = (0, snakecase_keys_1.default)(req.body, { deep: true });
        const savedMessage = await prisma.message.createMany({
            data: newMessages
        });
        res.status(201).json({ message: "Messages created successfully!" });
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching projects" });
    }
});
exports.default = router;
