const mongoose = require("mongoose")
const Schema = mongoose.Schema

const orderDetailSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    amount: {
        type: Number,
    },
})

module.exports = mongoose.model("OrderDetail", orderDetailSchema)
