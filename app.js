const express=require ("express")
const app=express();
const connectDatabase=require("./db.js");
const dotenv=require("dotenv")
const bodyParser=require("body-parser");
const Buisness=require("./BuisnessModel");

app.use(bodyParser.urlencoded({ extended: true}))
dotenv.config({path:"./config.env"});
connectDatabase();

//app.use(express.json());

app.listen("3000",()=>{
    console.log("server is running")
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.post("/bicon/register",async (req,res)=>{
    const {title,
        membersDetails,
        description,
        leaderMail,
        leaderCell,
        comments}=req.body

        const idea=await Buisness.create({
            title,
            membersDetails,
            description,
            leaderMail,
            leaderCell,
            comments
        })
   
         if (!idea){
            // res.status(500).json({
            //     success:false,
            //     message:"Failed to Register"
            // })
         
        res.send("failed to submit") }

         res.status(200).json({
            sucess:true,
            message:"Successfully registered"
         })
    

})
