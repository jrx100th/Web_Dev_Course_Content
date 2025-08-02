import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser"

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

var bandName = "";

app.use(bodyParser.urlencoded({extended : true}));

function generateBandName(req, res, next){
  bandName = req.body["street"] + " " + req.body["pet"];
  console.log(
    "Band Name is : "+req.body["street"] + " " + req.body["pet"]
  );
  next();
}

// app.use(generateBandName);


app.post("/submit",generateBandName,(req,res)=>{
  console.log(req.body);
  console.log(bandName);
  console.log("form recieved. check above lines");
  // res.redirect("/submit");
  res.send(`<h1>Your band name is ${bandName} !!</h1>`)
})


app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html");
});

// app.get("/submit",(req,res)=>{
//   res.send(`<h1>Your band name is ${bandName} !!</h1>`);
// });


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


