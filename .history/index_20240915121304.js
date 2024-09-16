const express=require("express");
const urlRoute=require('./routes/url');
const {connectToMongoDB} = require("./connect");
const URL=require('./models/url');
const app=express();
const PORT=8001;
app.use(express.json());

connectToMongoDB('mongodb://127.0.0.1:27017/short-url').then(()=> console.log("Mongodb Connected"));

app.use('/url',urlRoute);

app.get('/:shortId',(req,res) =>{
    const shortId=req.params.shortId;
    await URL.fin
})
app.listen(PORT,()=> console.log(`Server Started at PORT: ${PORT}`));

