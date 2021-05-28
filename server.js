const express=require('express');
const connectDb=require('./DB/dbconnection');
const routes =require('./route/index');
const bodyParser=require('body-parser');
const app=express();
connectDb();
app.use(express.json({extended:false}));
app.use('/api',routes);
app.use(bodyParser.json());
app.get("/",function(req,res){
    res.send("WELCOME TO MY DIARY")
})
const Port =process.env.port || 3000;
app.listen(Port,()=>console.log("Server stated"));
