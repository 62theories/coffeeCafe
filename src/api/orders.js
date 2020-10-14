const router = require("express").Router()
const Order = require("../models/Order")
const OrderDetail = require("../models/OrderDetail")

router.get("/", async (req, res, next) => {
    try {
        const orders = await Order.find({})
            .populate({
                path: "orderDetailIds",
                populate: "productId",
            })
            .exec()
        res.json({ orders })
    } catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    let { products, tableId } = req.body
    try {
        const createdOrderDetails = await OrderDetail.create(products)
        const createdOrder = await Order.create({
            orderDetailIds: createdOrderDetails.map(({ _id }) => _id),
            tableId: tableId,
        })
        res.json({ createdOrder })
    } catch (err) {
        next(err)
    }
})

module.exports = router
