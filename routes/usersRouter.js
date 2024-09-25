const express = require("express");
const router = express.Router();
const usersModel = require("../models/userModel");

router.get("/",(req,res)=>{
    res.send("hyeeeee!")
})

module.exports = router;