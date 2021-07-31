const projectModel = require('../models/projectModal')
const blogModal = require('../models/blogModel')

const index = (req, res) => {
    projectModel.find()
    res.render('home', { title: 'Akash - Full Stack Developer' })
}

module.exports = {
    index
}