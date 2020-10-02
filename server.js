const path = require("path");
const express = require("express");

const app = express();
const PORT = 8000; 
const db = require("./db/db.json");

const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

function writeToFile (data) {
    return writeFileAsync("db/db.json", JSON.stringify(data))
};

function readFromFile () {
    return readFileAsync("db/db.json", "UTF8")
};



// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", function(req, res) {
    readFromFile().then(activeNote => {
    var parsedActiveNote = JSON.parse(activeNote);
    console.log(parsedActiveNote);
    res.json(parsedActiveNote)})
  });


//Post /api/notes
app.post("/api/notes", function(req,res) {
    var newNotes = req.body
    readFromFile().then(function(storedNotes) {
        var parsedStoredNotes = JSON.parse(storedNotes);
        parsedStoredNotes.push(newNotes);
        writeToFile(parsedStoredNotes).then(function(parsedStoredNotes) {
          console.log(parsedStoredNotes);
        });
    });
    console.log("notes");
    console.log(newNotes);
    res.status(200).end();
});

//Delete /api/notes/:id



app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT + "/");
});
