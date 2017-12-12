const express = require('express');
const logger  = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/incomeExpense');

const app = express();

//Routes
const users = require('./routes/users');
const incomes = require('./routes/incomes');
const expenses = require('./routes/expenses');

//Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());

//Routes
app.use('/users', users);
app.use('/incomes', incomes);
// app.use('/expenses', expenses);

//Catch 404 Errors and forward to error handler
app.use((req,res,next)=>{
    const err= new Error('Not Found');
    err.status = 404;
    next(err);
});

//Error Handler Function
app.use((err,req,res,next)=> {
    const error =  app.get('env') === 'development' ? err: {};
    const status = err.status || 500;
    res.status(status).json({
        error: {
            message: error.message
        }
    });
})

//Start the server

const port = app.get('port') || 3000;
app.listen(port, ()=> console.log(`Server is listening on ${port}`));