"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path = __importStar(require("path"));
const index_1 = require("./routes/index");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const port = process.env.PORT || 3000;
const originWhitelist = [`http://localhost:${port}`];
const corsConfig = {
    origin: (origin, callback) => {
        if (origin == null || originWhitelist.indexOf(origin) !== -1) {
            callback(null, true);
            return;
        }
        callback(new Error("Not allowed by CORS"));
    },
    optionsSuccessStatus: 200,
};
exports.app = (0, express_1.default)();
exports.app.set("port", port);
exports.app.use((0, morgan_1.default)("dev"));
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)(corsConfig));
exports.app.use(express_1.default.static(path.join(__dirname, "../public")));
exports.app.use("/", index_1.index);
exports.app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
//# sourceMappingURL=app.js.map