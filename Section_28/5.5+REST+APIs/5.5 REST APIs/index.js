import express, { response } from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// HINTs: Use the axios documentation as well as the video lesson to help you.
// https://axios-http.com/docs/post_example
// Use the Secrets API documentation to figure out what each route expects and how to work with it.
// https://secrets-api.appbrewery.com/

const yourBearerToken = "8***********************************";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req, res) => {
  var id = req.body.id;
  var secret = req.body.secret;
  var score = req.body.score
  try{
    const response = await axios.post(
      API_URL+"/secrets",
      {
      secret : secret,
      score : score
    },
     {headers : {
      Authorization : `Bearer ${yourBearerToken}`
    }}
  )
    res.sendStatus(201);
  } catch (error){
        res.status(404).send(error.response.data);
    }
});

app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  var secret = req.body.secret;
  var score = req.body.score;
  try{
    const response = await axios.put(API_URL+`/secrets/${searchId}`,{
      "secret" : secret,
      "score" : score
    },{
        headers  : {
          Authorization : `Bearer ${yourBearerToken}`
        }
    });
    res.sendStatus(201);
  } catch(error){
    res.status(404);
  }
  // TODO 3: Use axios to PUT the data from req.body to the secrets api servers.
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  var secret = req.body.secret;
  var score = req.body.score;
  try{
    const response = await axios.patch(API_URL+`/secrets/${searchId}`,{
      "secret" : secret,
      "score" : score
    },{
        headers  : {
          Authorization : `Bearer ${yourBearerToken}`
        }
    });
    res.sendStatus(201);
  } catch(error){
    res.status(404);
  }
  // TODO 4: Use axios to PATCH the data from req.body to the secrets api servers.
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  try{
    await axios.delete(`https://secrets-api.appbrewery.com/secrets/${searchId}`,{
      headers : {
        Authorization : `Bearer ${yourBearerToken}`
      }
    });
    res.sendStatus(200);
  } catch (error){
    res.sendStatus(404)
  }
  // TODO 5: Use axios to DELETE the item with searchId from the secrets api servers.
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
