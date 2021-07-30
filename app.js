const express = require('express')
const app = express()

PORT = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use('/assets', express.static('assets'))

app.get('/', (req, res) => {

    res.render('home')
})

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))