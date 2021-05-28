const mongoose= require('mongoose');
const URL="mongodb+srv://mussa:mussa@cluster0.pycek.mongodb.net/diary?retryWrites=true&w=majority";
const connectDb=async()=>{
   try { await mongoose.connect(URI,{
    useFindAndModify:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useNewUrlParser: true });

console.log('db connected..!');
       
   } catch (error) {
       
   }
} 

module.exports=connectDb;