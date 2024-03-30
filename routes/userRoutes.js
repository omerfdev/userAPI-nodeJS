const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.addUser);
router.put('/:id/activate', userController.activeUser);
router.put('/:id/deactivate', userController.deactiveUser);
router.delete('/:id', userController.removeUser);

module.exports = router;
