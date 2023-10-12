import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://www.thecocktaildb.com/api/";

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting..." });
});

app.post("/randomCocktail", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "json/v1/1/random.php");
    res.render("index.ejs", { data: result.data });
  } catch (error) {
    res.render("index.ejs", { data: error.response.data });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
