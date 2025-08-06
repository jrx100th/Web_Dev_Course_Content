import express from "express";
import bodyParser from "body-parser";


const app = express();
const d = new Date();
let day_num = d.getDay();
const port = 3000;

let context = "";
let day = "";

if ((day_num === 0) || (day_num === 6) ){
    context = "have fun";
    day = "Weekend";
} else{
    context = "work hard";
    day = "Weekday";
}



app.get("/",(req,res)=>{
    res.render("index.ejs",{
        dayType : day,
        Advice : context
    })
})



app.listen(port,(req, res)=>{
    console.log(`server listening on port no ${port}`);
})