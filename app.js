// ajouter ce code dans app.js
const express = require("express");
const app = express();
const port = 3000;

// stocker le nombre de requêtes reçues
let requested = 0;

// route: 127.0.0.1:3000 (ou localhost:3000)
app.get("/", (req, res) => {
  // incrémenter le nombre de requêtes reçues
  requested++;

  // afficher la valeur dans le terminal
  console.log(requested);

  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`ExpressJS app listening on port ${port}`);
});
