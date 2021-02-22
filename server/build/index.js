"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var connect_1 = __importDefault(require("./models/connect"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var config_1 = __importDefault(require("./config"));
var app = express_1.default();
var port = config_1.default.SERVER_PORT;
var db = config_1.default.MONGO_ATLAS_URI_STRING || "mongodb://" + config_1.default.HOST + ":" + config_1.default.MONGO_PORT + "/" + config_1.default.MONGO_DATABASE;
connect_1.default(db);
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(morgan_1.default('dev'));
app.listen(port, function () {
    console.log("server listening on port " + port);
});
