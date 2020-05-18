const express = require('express')
const mongoose = require('mongoose')
const handlebar = require('express-handlebars')
const appRoutes  = require('./src/routes/employers')
require('dotenv').config()

const PORT = process.env.PORT || 3002
const HOSTNAME = '127.0.0.1'

const app = express()
const hbs = handlebar.create({
    defaultLayout: 'base',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'src/views')
app.use(appRoutes)

async function start() {
    try {
        await mongoose.connect(
            process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useFindAndModify: false
            }
        )
        app.listen(PORT, () => {
            console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
        })
    } catch (e) {
        console.log(e)
    }
}

start()