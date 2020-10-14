const mongoose = require("mongoose")
const Schema = mongoose.Schema

const orderSchema = new Schema({
    orderDetailIds: [
        {
            type: Schema.Types.ObjectId,
            ref: "OrderDetail",
        },
    ],
    tableId: {
        type: Schema.Types.ObjectId,
        ref: "Table",
        required: true,
    },
})

module.exports = mongoose.model("Order", orderSchema)
