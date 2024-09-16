const shortid =require("shortid");// code taken from site short id 

const URL=require('../models/url');

async function handleGenerateShortURL(req,res){
    const body=req.body;
    console.log(`Received request with body: ${JSON.stringify(body)}`);



    if(!body || !body.url)
        return res.status(400).json({error:'url is required'});

    const shortID=shortid.generate();
    await URL.create({
        shortId:shortID,
        redirectURL: body.url,
        visitHistory:[],
    });
    return res.json({ id:shortID });
}

async function handleGetAnaLytics(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({ totalClicks:result.visitHistory.length, 
        analytics: result.visitHistory,
    });
}
module.exports = {
    handleGenerateShortURL,
    handleGetAnaLytics,
};