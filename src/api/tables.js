const router = require("express").Router()
const Table = require("../models/Table.")

router.get("/", async (req, res, next) => {
    try {
        const tables = await Table.find({}).exec()
        res.json({ tables })
    } catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    let { detail } = req.body
    try {
        const createdTable = await Table.create({ detail })
        res.json({ createdTable })
    } catch (err) {
        next(err)
    }
})

module.exports = router
