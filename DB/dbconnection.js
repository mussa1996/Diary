const mongoose = require('mongoose');
require('dotenv').config()
const connectionURL = process.env.dbConnection
const connectDb = async () => {
   try {
      await mongoose.connect(connectionURL, {
         useFindAndModify: true,
         useCreateIndex: true,
         useUnifiedTopology: true,
         useNewUrlParser: true
      });

      console.log('db connected..!');
      

   } catch (error) {
      console.log(error)
   }
}

module.exports = connectDb;