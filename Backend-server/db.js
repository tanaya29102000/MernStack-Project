const mongoose = require('mongoose');
const mongoURI ="mongodb+srv://kanerkartanaya29:tanayaer0.kq36a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const mongoDB=async()=>{

await  mongoose.connect(mongoURI,{userNewUrlParser:true},(err,result)=>{
    if (err)console.loglog("---",err)
        else{
    console.log("Connected Succesfully!!");
        }
});
}

module.exports=mongoDB;
