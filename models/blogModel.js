const mongodb = require('mongoose')
const Schema = mongodb.Schema

const blog = new Schema({
    title: {
        type: String,
        required: true
    }
}, {
    timestamp: true
})

const Blog = mongodb.model('Blog', blog)

module.exports = Blog