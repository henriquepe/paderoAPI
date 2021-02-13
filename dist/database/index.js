"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
if (process.env.NODE_ENV === "production") {
    mongoose_1.default.connect('mongodb+srv://rosa1702:rosa1702@paderodb.m7oe2.mongodb.net/paderoDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
    var db = mongoose_1.default.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('mongo connected');
    });
}
else {
    mongoose_1.default.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });
    var db = mongoose_1.default.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('mongo connected');
    });
}
