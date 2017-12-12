const express = require('express');
const router = require('express-promise-router')();

const UserController = require('../controllers/users');

router.route('/')
    .post(UserController.newUser);

router.route('/:userId')
    .get(UserController.getUser);
    

module.exports = router;