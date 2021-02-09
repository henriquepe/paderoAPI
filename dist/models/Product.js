"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var ProductSchema_1 = __importDefault(require("../schemas/ProductSchema"));
var Product = mongoose_1.default.model('Product', ProductSchema_1.default);
exports.default = Product;
