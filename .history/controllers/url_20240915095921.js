const shortid =require("shortid");// code taken from site short id 

const URL=require('../models/url');

async function handleGenerateShortURL(req,res){
    const body=req.body;
    if(!body || !body.url)
        return res.status(400).json("error":'url is required');

    const shortID=shortid.generate();
    await URL.create({
        shortId:shortID,
        redirectURL: body.url,
        visitHistory:[],
    });
    return res.json({ id:shortID });
}
module.exports = {
    handleGenerateShortURL,
};