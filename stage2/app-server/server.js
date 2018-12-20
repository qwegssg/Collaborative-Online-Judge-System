const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello Express World!"));

app.listen(port, () => console.log("App is listening on port 3000!"))