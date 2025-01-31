const { PrismaClient } =  require('@prisma/client')
const prisma = new PrismaClient()

const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const Database = process.env.DATABASE_URL;
const secret_code = process.env.secret_code;
const cors = require("cors")
console.log("The database url is : " + Database);
const zod = require("zod");

// app.use(cors({
//   origin : "http://localhost:3000",
//   methods : ["GET","POST"],
//   allowedHeaders : ["Content-Type"]
// }))

app.use(cors({
    origin : "https://freelancinghub.vercel.app",
    methods : ["GET","POST"],
    allowedHeaders : ["Content-Type"]
  }))

app.use(express.json());

app.get("/" , (req,res)=>{
  return res.json({msg:"Welcome to the v1 of the freelancing site"});
})

const checkData = zod.object({
  username : zod.string(),
  email : zod.string(),
  phoneNumber : zod.string().min(10).max(10),
  text : zod.string()
})

app.post("/postreq/postdata" , async(req,res)=>{
    const {success} = checkData.safeParse(req.body);
    if(!success) return res.json({msg : "Your data do not fulfill our data requirement || Insert a new data"});
    try{
        const {username,email,phoneNumber,text} = req.body
        let userdata = await prisma.user.create({
            data:{
                username,
                email,
                phoneNumber,
                text
            }
        })
        if(userdata) return res.json({msg : "User data entered succussfully"})
        else return res.json({msg:"Unable to store user's data"})
    }
    catch(error){
        return res.json("Something went wrong " + error)
    }
})

app.listen(PORT , ()=>{
  console.log(`Your server is running on the port number ${PORT}`);
})
