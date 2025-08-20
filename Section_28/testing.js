import https from "https";
import express from express
import { hostname } from "os";
import path from "path";
import { response } from "express";

const app = express()

app.get("/",(req, res)=>{
    const options = {
        hostname : "bored-api.appbrewery.com",
        path: "/random",
        method: "GET"
    };

    const request = https.request(options,(response)=>{
        let data = "";
        response.on("data",(chunk)={
            data += chunk;
        });

    response.on("end",()=>{
        try {
            const result = JSON.parse(data);
            res.render("index.ejs",{activity : data})
        } catch(error) {}
    })

    });
    
};