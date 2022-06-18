"use strict";
exports.__esModule = true;
exports.app = void 0;
var express_1 = require("express");
var morgan_1 = require("morgan");
var cors_1 = require("cors");
var path = require("path");
var index_1 = require("./routes/index");
var dotenv = require("dotenv");
dotenv.config();
var port = process.env.PORT || 3000;
var originWhitelist = ["http://localhost:".concat(port)];
var corsConfig = {
    origin: function (origin, callback) {
        if (origin == null) {
            callback(new Error("No origin supplied"));
            return;
        }
        if (originWhitelist.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    optionsSuccessStatus: 200
};
exports.app = (0, express_1["default"])();
exports.app.set("port", port);
exports.app.use((0, morgan_1["default"])("dev"));
exports.app.use(express_1["default"].json());
exports.app.use((0, cors_1["default"])(corsConfig));
exports.app.use(express_1["default"].static(path.join(__dirname, "../public")));
exports.app.use("/", index_1.index);
