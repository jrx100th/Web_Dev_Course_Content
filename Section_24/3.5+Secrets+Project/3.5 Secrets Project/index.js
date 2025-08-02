//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";
import express from "express";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req, res)=>{
    res.sendFile(__dirname+"/public/index.html");
});

function check(req,res, next){
    console.log("Page suubmitted!");
    if (req.body["password"] === "ILoveProgramming"){
        res.sendFile(__dirname+"/public/secret.html");
    } else{
        res.sendFile(__dirname+"/public/index.html");
    }
}

app.post("/check",check);

app.listen(port,(req,res)=>{
    console.log(`Server listening on port ${port}.`);
})