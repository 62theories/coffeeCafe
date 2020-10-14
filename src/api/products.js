const router = require("express").Router()
const Product = require("../models/Product")

router.get("/", async (req, res, next) => {
    try {
        const products = await Product.find({}).exec()
        res.json({ products })
    } catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    let { name, price } = req.body
    try {
        const createdProduct = await Product.create({ name, price })
        res.json({ createdProduct })
    } catch (err) {
        next(err)
    }
})

module.exports = router
