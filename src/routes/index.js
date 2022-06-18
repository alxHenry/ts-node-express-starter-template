"use strict";
exports.__esModule = true;
exports.index = void 0;
var express_1 = require("express");
var controller = require("../controllers/index");
exports.index = (0, express_1.Router)();
exports.index.get("/", controller.index);
