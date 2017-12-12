const router = require('express-promise-router')();

const incomeController = require('../controllers/incomes');

router.route('/:userId')
    .get((req,res,next)=> {console.log('run'); next();},incomeController.getUserIncomes)
    .post(incomeController.newUserIncome);

router.route('/:incomeId')
    .put(incomeController.updateUserIncome)

router.route('/thisyear/:userId')
    .get(incomeController.getYearIncome);

module.exports= router;