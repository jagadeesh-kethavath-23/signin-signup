const express =require("express");
const path =require("path");
const app = express();
const hbs=require("hbs");

require("./db/conn");
const Register=require("./models/registers")

const port =process.env.PORT || 3000;

const static_path =path.join(__dirname,"../public");
const template_path =path.join(__dirname,"../templates/views");
const partials_path =path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

 app.get("/",(req,res) =>{
     res.render("index");
 });
 app.get("/register",(req,res)=>{
     res.render("register");
 })
 app.post("/register",async(req,res)=>{
     try {
        const register_user=new Register({
            username:req.body.username,
            password:req.body.password
        })
         const registered = await register_user.save();
        res.status(201).render("index");
       
     } catch (error) {
         res.status(400).send("username cant be empty");
     }

 })
 app.get("/login",(req,res)=>{
     res.render("login");
 })
 var account_name;
 app.post("/login",async(req,res)=>{
     try {
         const username=req.body.username;
         account_name=username;
         const password=req.body.password;
         const name=await Register.findOne({username:username});
         if(name.password===password){
             res.render("home");
         }
         else{
             res.send("invalid password");
         }
         
     } catch (error) {
         res.send("invalid username");
     }
 })
app.get("/profile",async(req,res)=>{
    res.render("profile",{account_name:account_name});
})
app.get("/logout",(req,res)=>{
    account_name="";
    res.render("index");
})

 app.listen(port, ()=> {
         console.log(`running on ${port}`);
    
    })
