const path = require("path");
const express = require("express");

const app = express();
const PORT = 8000; 
const db = require("./db/db/json");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var notes = [];

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("/api/notes", function(req, res) {
    console.log(activeNote);
    return res.json(activeNote);
  });


//Post /api/notes
app.post("/api/notes", function(req,res) {
    console.log("notes");
    console.log(req.body);



//fs.writeFile(destination, db, function(err) {}


//return 
res.status(200).end();

//Delete /api/notes/:id



app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT + "/");
});
