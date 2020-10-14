const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")
const bodyParser = require("body-parser")

require("dotenv").config()

const middlewares = require("./middlewares")
const api = require("./api")

const app = express()

app.use(morgan("dev"))
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api/v1", api)

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

//connect db
require("./db")

module.exports = app
