// for views pages like home, signup, login

const express = require('express');
const URL = require('../models/url');
const { restrictTo } = require("../middleware/auth");

const router = express.Router();

router.get("/admin/urls", restrictTo(["ADMIN"]), async(req, res)=>{
   
   const allURLS = await URL.find(); 
   return res.render("home", {
    urls: allURLS
   });
})

router.get("/", restrictTo(["NORMAL", "ADMIN"]), async(req, res)=>{
   
   const allURLS = await URL.find({createdBy: req.user._id}); 
   return res.render("home", {
    urls: allURLS
   });
})

router.get("/signup", (req, res)=>{
   return res.render("signup");
});

router.get("/login", (req, res)=>{
   return res.render("login");
});


module.exports = router;