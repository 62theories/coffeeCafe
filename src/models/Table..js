const mongoose = require("mongoose")
const Schema = mongoose.Schema

const tableSchema = new Schema(
    {
        detail: {
            type: String,
        },
    },
    {}
)

module.exports = mongoose.model("Table", tableSchema)
