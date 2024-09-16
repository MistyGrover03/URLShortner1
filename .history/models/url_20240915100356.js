const mongoose=require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    redirectURL:{
        type:String,
        required:true,
    },
    visitHistory:[
        { timestamp : {type: Number}}       // visit History is array of timeStamps
    ],
},
{timestamps:true}    // to get timings of new entry
);

const URL=mongoose.model("URL",urlSchema);

module.exports=URL;