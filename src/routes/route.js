const express=require('express')
const router=express.Router()
const { register, getData } = require('../controllers/controller');

router.post('/register',register)

router.get('/data',getData)

module.exports=router