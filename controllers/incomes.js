const Income = require('../models/income');
const User = require('../models/user');
const mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID;

module.exports ={
    getUserIncomes: async (req,res,next) => {
        const { userId } = req.params;
        const id = mongoose.Types.ObjectId(userId); 
        const userIncomes = await Income.find({incomer: id});  
        res.status(200).json(userIncomes);     
    },

    newUserIncome: async(req,res,next) => {
        const { userId } = req.params;        
        const newIncome = new Income(req.body);

        const user = await User.findById(userId);
        newIncome.incomer = user;

        const date = new Date(newIncome.createdOn);
        const year = date.getFullYear();
        const month = date.getMonth();
        newIncome.month = month+1;
        newIncome.year = year;

        await newIncome.save();
        res.status(201).json(newIncome);
    },

    updateUserIncome: async (req,res,next) => {

        const {incomeId} = req.params;
        const newIncome = req.body;
        const updatedIncome = await Income.findByIdAndUpdate(incomeId, newIncome);
        res.status(200).json(updatedIncome);
    },

    getYearIncome: async(req,res,next) => {

        const { userId } = req.params;
        const id = mongoose.Types.ObjectId(userId); 
        var today =  new Date();
        thisYearIncomes = await Income.find({incomer: id, year: today.getFullYear()-1}, {amount: 1, _id:0})
        var sum = thisYearIncomes.reduce((total,))
        res.status(200).json(thisYearIncomes);
    }


}