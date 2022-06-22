//importing express package
const express = require('express');

//initialising express framework
const app = express();

//serving static files from public
app.use(express.static('public'));

//serving index file for the root path
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
})

//starting server
let server = app.listen(8888, function(){
    console.log("App server is running on port 8888");
});


//to run server url copy and paste
//http://localhost:8888