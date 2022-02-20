const express = require('express');
const router = express.Router();
const {ensureAuth}= require("../middleware");
//login page
router.get('/',(req,res) => {
    res.render('Login.ejs');
})

//get dashboard
router.get('/dashboard',ensureAuth,(req,res) => {
    res.render('dashboard',{
        name:req.user.fullName,
        image:req.user.image
    })
})

module.exports =router;