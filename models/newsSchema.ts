const mongose = require('mongoose');

const NewsSchema = mongose.NewsSchema({
    hat: { type: String },
    title: { type: String },
    text: { type: String },
    author: { type: String },
    img: { type: String },
    publishDate: { type: Date },
    active: { type: Boolean }
})

export default NewsSchema;