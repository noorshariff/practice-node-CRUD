const express=require('express');
const app=express();
const bodyParser=require('body-parser')
const cors=require('cors')
const mongoose = require('mongoose');
const adminRoutes=require('./routes/admin')

mongodbUrl="mongodb://localhost:27017/CRUD"

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cors());
app.use(adminRoutes)






mongoose.connect( mongodbUrl,{useNewUrlParser:true}).then(res=>{
    console.log("mongodb connected successfully");
    app.listen(5000);
    console.log("app is listening port no:5000")

})










