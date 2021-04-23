// Dependencies
const notes= require ('./db/db.json')
const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 4000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))



//HTML Routes 
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
    console.log("hello index")
});
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
    console.log("hello notes")
});

//--------

//API Routes


app.get('/api/notes', (req, res) => console.log(notes));













// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
