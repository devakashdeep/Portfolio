const express = require('express')
const blogRouter = require('./controllers/blogController')
const homeRouter = require('./routes/homeRouter')
const mongodb = require('mongoose')
const app = express()

PORT = process.env.PORT || 8080

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use('/assets', express.static('assets'))

const DB_URI = `mongodb+srv://n1k1w1k1:24lBhGZwLS5ZwpO8@portfolio.liyth.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongodb.connect(DB_URI, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
    app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
})

app.use(homeRouter)

