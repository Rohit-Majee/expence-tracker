const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    datetime: { type: Date, required: true }
});

const transactionModel = mongoose.model('Transaction',transactionSchema);

module.exports = transactionModel;