const express=require("express");
const{handleGenerateShortURL} =require('../controllers/url');
const router=express.Router();
app.use(express.json());
router.post('/',handleGenerateShortURL);   
module.exports=router;