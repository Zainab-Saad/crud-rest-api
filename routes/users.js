const express = require('express');
const usersController = require('../controller/users');

const router = express.Router();

router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);
module.exports = router;