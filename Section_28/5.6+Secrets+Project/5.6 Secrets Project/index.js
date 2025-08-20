// HINTS:
// 1. Import express and axios

import express from "express";
import axios from "axios";
import bodyParser from "body-parser"







// 2. Create an express app and set the port number.

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/random";

var secret = "Secret";
var user = "User";





app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

app.get("/",async (req, res)=>{
    try{
        const response = await axios.get(API_URL);
        user = response.data.username;
        secret = response.data.secret;
        console.log(user);
        console.log(secret);
        res.render("index.ejs",{
        secret : secret,
        user : user
    });
    } catch (error){
        console.error(error.message);
        res.sendStatus(404);
    }
    
});





// 3. Use the public folder for static files.








// 4. When the user goes to the home page it should render the index.ejs file.









// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.








// 6. Listen on your predefined port and start the server.

app.listen(port,(req, res)=>{
    console.log(`Listening on port no.${port}`);
});