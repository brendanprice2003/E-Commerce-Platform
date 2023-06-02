
// npm
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import express from 'express';
// import sqlite3 from 'sqlite3';
const path = require('path');
const express = require('express');
// const sqlite3 = require('sqlite3');

// config
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
const app = express();

// configure middleware
app.use('/public', express.static(__dirname + '/public'));


// express paths
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './pages/home.html'));
});


// * wildcard
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './pages/home.html'));
});

// listen on port 4300
app.listen(8080);
console.log('Running...');
// origin is http://localhost:4300

/*

    Only use this https configuration for dev environments, fallback to cdn default on production version
    (the stuff that is on the webserver)

    Hosting this express app on a webserver, without this express https protocol middleware
    should be sufficient and should work just like a normal website, where the cdn would
    issue a cert instead of doing it programmatically.
*/
