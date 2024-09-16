const express=require("express");
const{handleGenerateShortURL ,handleGetAnaLytics} =require('../controllers/url');
const router=express.Router();

router.post('/',handleGenerateShortURL);   

router.get('/analytics/:shortId',handleGetAnaLytics);
module.exports=router;