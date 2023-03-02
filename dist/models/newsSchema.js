"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongose = require('mongoose');
const NewsSchema = mongose.NewsSchema({
    hat: { type: String },
    title: { type: String },
    text: { type: String },
    author: { type: String },
    img: { type: String },
    publishDate: { type: Date },
    active: { type: Boolean }
});
exports.default = NewsSchema;
