require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const next = require('next')
const dev = process.env.APP_ENV || 'production';
const nextApp = next({dir: './src/views', dev})
const handle = nextApp.getRequestHandler()
const userRoutes  = require('./src/routes/users')
const apiRoutes = require('./src/routes/api')


const PORT = process.env.PORT || 3000
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1'




nextApp.prepare().then(() => {
    const app = express()
    app.set('views', 'src/views')
    app.use(apiRoutes, userRoutes)
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    //catch-all for nextJS /pages
    app.get('*', (req, res) => {
        return handle(req, res)
    })


    async function start() {
        try {
            await mongoose.connect(
                process.env.MONGO_URI,
                {
                    useNewUrlParser: true,
                    useFindAndModify: false,
                    useUnifiedTopology: true
                }
            )
            app.listen(PORT, () => {
                console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
            })
        } catch (e) {
            console.log(e)
        }
    }

    start()//start server
})