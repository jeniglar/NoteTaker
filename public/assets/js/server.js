const path = require("path");
const express = require("express");

const app = express();
const PORT = 8000; 
const db = require("./db/db/json");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var notes = [];

//Get /api/notes from db.json
//return res.json(data);

//Post /api/notes
//receive JSON obj 
//fs.writeFile(destination, db, function(err) {}


//return res.status(200).end();
//Delete /api/notes/:id



app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT + "/");
});
