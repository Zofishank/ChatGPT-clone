const express = require("express");
const router = express.Router();
const ownersModel = require("../models/ownerModel");
const ownerModel = require("../models/ownerModel");

router.get("/",(req,res)=>{
    res.send("hyeeeee!")
})

if(process.env.NODE_ENV === "development"){
    router.post("/create",async(req,res)=>{
        const owners = await ownerModel.find();
        if(owners.length>0){
            return res.status(504).send("you dont have permission to create a new owner");
        }

        let {fullName, email,password} = req.body;
        let createdOwner = await ownerModel({
            fullName, 
            email,
            password,
        })
        res.status(201).send(createdOwner)
    })
}


module.exports = router;