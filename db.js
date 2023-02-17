const mongoose=require("mongoose");
let url1="mongodb://127.0.0.1:27017/BICON";
const connectDatabase=()=>{
    mongoose.connect(process.env.DB,{useNewUrlParser:true,
        useUnifiedTopology:true}).then((data)=>{
            console.log(`MongoDB connected with server : ${data.connection.host}`);
        })
}

module.exports=connectDatabase