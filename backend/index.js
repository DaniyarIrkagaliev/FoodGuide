require('dotenv').config()
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser")
const sequelize = require('./db/db')
const usersRouter = require("./db/router/users-router")
const restaurantRouter = require('./db/router/restaurant-router')
const reviewRouter = require('./db/router/review-router')
const models = require('./db/models/models')

const Process = require("process");
const PORT = process.env.PORT || 8080;
const app = express()


app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {
        credentials: true,
        origin: process.env.CLIENT_URL

    }));
app.use('/api', usersRouter);
app.use('/api', reviewRouter);
app.use('/api', restaurantRouter);

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('server worked on port = ' + PORT))
    } catch (e) {
        console.log(e);
    }
}

start()