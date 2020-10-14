const express = require("express")

const coffee = require("./coffees")
const product = require("./products")
const table = require("./tables")
const order = require("./orders")

const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        message: "API - 👋🌎🌍🌏",
    })
})

router.use("/coffees", coffee)
router.use("/products", product)
router.use("/tables", table)
router.use("/orders", order)

module.exports = router
