
const mongoose = require("mongoose");


const ConnectDb = (url) => {
return mongoose
    .connect(process.env.MONGO_URI)
  
};

module.exports=ConnectDb
