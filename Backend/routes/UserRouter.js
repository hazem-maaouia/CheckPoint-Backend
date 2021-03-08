const express = require('express');
const {addUser,getAllUsers, updateUser, deleteUser} = require('../controllers/UserController');
const router = express.Router();

router.get('/users',getAllUsers)
router.post('/add_user',addUser)
router.put('/users/:id',updateUser)
router.delete('/users/:id',deleteUser)
module.exports= router;