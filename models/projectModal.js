const mongodb = require('mongoose')
const Schema = mongodb.Schema

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamp: true
})

const Projects = mongodb.model('Project', projectSchema)

module.exports = Projects