"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log(process.env);
exports.default = {
    MONGO_ATLAS_URI_STRING: process.env.MONGO_ATLAS_URI,
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'videosYlibros',
    MONGO_USER: process.env.MONGO_USER || 'codeWorksT',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'LocalDB1',
    HOST: process.env.HOST || 'localhost',
    MONGO_PORT: process.env.MONGO_PORT || 27017,
    SERVER_PORT: process.env.SERVER_PORT || 3004
};
