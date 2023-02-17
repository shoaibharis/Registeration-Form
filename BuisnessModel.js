const mongoose=require("mongoose");
const Buisness=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },

    membersDetails:[{
         name:{
            type:String,
            required:true
         },
          
         department:{
            type:String,
            required:true
         },
         degree:{
            type:String,
            required:true
         },
          semester:{
            type:Number,
            required:true
         },
          section:{
            type:String,
            required:true
         },
          cell:{
            type:Number,
            required:true
         },
          email:{
            type:String,
            required:true
         }
          
    }],
 description:{
        type:String,
        required:true
    },

    leaderMail:{
        type:String,
        required:true
    },
    leaderCell:{
        type:String,
        required:true
    },
    comments:{
        type:String
    }
})

module.exports=mongoose.model("buisness",Buisness);