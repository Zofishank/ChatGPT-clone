const express = require("express");
const router = express.Router();
const productModel = require("../models/productModel");

router.get("/",(req,res)=>{
    res.send("hyeeeee!")
})

module.exports = router;