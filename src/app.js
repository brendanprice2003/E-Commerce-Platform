
// npm
const path = require('path');
const express = require('express');
const sqlite3 = require('sqlite3');

// config
const log = console.log.bind(console); // shorthand function for `console.log();`
const app = express();

// configure middleware
app.use('/public', express.static(__dirname + '/public'));


// paths
app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, './pages/home.html'));
});


// wildcards
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './pages/home.html'));
});
// app.get('/', (req, res) => {
//     res.redirect('/home');
// });

// listen on port 8880
app.listen(8880);
console.log('Running...');
// origin is http://localhost:8880

/*
    Please do not assign any https protocols to this project, or at least dont commit anything of the sort.

    Plesk automatically uses cloudflare to issue a domain certificate which makes the origin
    site (https://store.brendanprice.xyz) use the https protocol. 
    
    Pushing a change to the repository will automatically trigger a websocket on plesk to pull the 
    latest repository version and update the website files accordingly.
*/
