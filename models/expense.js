const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const expenseSchema = new Schema({
    amount: Number,
    category: [String],
    tags: [String],
    expenser :{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
});

const Expense = mongoose.model('expense', expenseSchema);
module.exports = Expense;