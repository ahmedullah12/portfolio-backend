"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
const app = (0, express_1.default)();
//middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000', "https://portfolio-dashboardd.netlify.app", "https://ahmed-ullah.netlify.app"],
    credentials: true,
}));
app.use('/api', routes_1.default);
app.get('/', (req, res) => {
    res.send('Server Running!');
});
app.use(globalErrorHandler_1.default);
exports.default = app;
