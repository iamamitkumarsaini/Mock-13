const express = require("express");
const { UserModel } = require("../Model/userModel");
require("dotenv").config();

const userRoutes = express.Router();

const words = [ "value","maid", "orange", "tearful", "jujube", "nectarine", "resolute", "basin", "thankful",
  "raspberry", "tangerine", "phone", "silent", "peace", "purpose", "zucchini", "effervescent", "woebegone",
  "spiritual", "jigsaw", "nirvana", "payment", "handsomely", "dysfunctional", "bittersweet", "nonchalant",
  "charming", "gobbledygook", "lackadaisical", "recalcitrant", "obsolete", "whippersnapper", "unarmed",
  "caricature", "toothpaste", "ubiquity", "kinesthetic", "obeisant", "subsequent", "xenophobia", "vivacious" ];



userRoutes.post("/info", async(req,res) => {
    
    try {
        const payload = req.body;
        const user = new UserModel(payload);
        await user.save();
        res.status(200).send({"Message":"User Registration Successful", user})
    } 
    
    catch (err) {
        console.log(err);
        res.status(500).send({"Message":"Something Went Wrong, try After Sometimes"});
    }
})

userRoutes.get("/play", async(req,res) => {
    try {
        const random = Math.floor(Math.random()*words.length)
        res.status(201).send({"word":words[random]})
    } 
    
    catch (err) {
        console.log(err);
        res.status(500).send({"Message":"Something Went Wrong, try After Sometimes"});
    }
})

userRoutes.patch("/score/:id",async(req,res) => {
    try {
        const id = req.params.id;
        const payload = req.body;
       const score = await UserModel.findByIdAndUpdate(id,payload);
        res.status(203).send({"Message":"Score Updated",score})
    } 
    
    catch (err) {
        console.log(err);
        res.status(500).send({"Message":"Something Went Wrong, try After Sometimes"});
    }
})


userRoutes.get("/dashboard", async(req,res) => {
    try {
        const results = await UserModel.find();
        res.status(200).send(results)
    } 
    
    catch (err) {
        console.log(err)
        res.status(500).send({"Message":"Something Went Wrong, try After Sometimes"});
    }
});

module.exports = { userRoutes };