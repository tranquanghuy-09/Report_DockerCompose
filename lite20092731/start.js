const express = require("express");

const app = express();
const { query } = require("./data.js");

app.use(express.json());

app.get("/api20092731/books", async (req, res) => {
  console.info(`Getting all books`);

  const books = await query("SELECT * FROM tblbookIUH20092731");
  res.json(books);
});

app.listen(5000, () => {
  console.info(`Server started listening on port 5000`);
});
