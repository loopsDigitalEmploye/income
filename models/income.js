const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const incomeSchema = new Schema({
    amount: Number,
    category: [String],
    tags: [String],
    createdOn: { type: Date, "default": Date.now }, 
    year: Number,
    month: Number,   
    incomer :{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
});

const Income = mongoose.model('income', incomeSchema);
module.exports = Income;