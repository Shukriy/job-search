//imports
const express = require('express');
const app = express();
require("dotenv").config();

//Server Static Files
app.use(express.static(__dirname + '/public'));
app.use('/pages', express.static(__dirname + 'public/pages'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

//Dynamic route
app.get('/', (req, res) => {
    
    res.sendFile(__dirname + '/public/dynamic.html');
    res
    console.log('Hello World');
    
});

// api.get('/', (request, response) => {
//     response.send('Hello World');
    
// });

//start the server
const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT, () => 
console.log(`Server running in port ${PORT}`)
);

