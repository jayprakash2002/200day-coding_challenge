const express=require("express");
const app =express();
const path= require("path");

const port =3030;

app.set("view engine","ejs");
app.set("views", path.join( __dirname,"/views"));

app.get("/",(req, res)=>{
    res.render("home.ejs");
}); 

app.listen(port, ()=> {
    console.log(`app is listening on port ${port}`);
});


