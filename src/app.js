
// npm
const path = require('path');
const express = require('express');
const sqlite3 = require('sqlite3');
const mysql = require('mysql');
const bcrypt = require('bcrypt');

// config
const log = console.log.bind(console); // shorthand function for `console.log();`
const app = express();

// Create a database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'brendanp_ecom'
});

// Connect to the database
db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.message);
    } else {
        console.log('Connected to the database');
    }
});

// configure middleware
// app.use('/public', express.static(__dirname + '/public'));
// app.use('/pages', express.static(__dirname + '/pages'));
app.use(express.static(__dirname));
app.use(express.json());

// paths
app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, './pages/home.html'));
});



// SEARCH DATABASE
app.get('/search', (req, res) => {
  const searchQuery = req.query.query;

  // Split the search query by spaces
  const searchTerms = searchQuery.split(' ');

  // Prepare the SQL query to search for products
  const conditions = searchTerms.map(() => "(LOWER(name) LIKE LOWER(?) OR LOWER(description) LIKE LOWER(?))");
  const query = `
    SELECT product_id, name, description, price, quantity
    FROM products
    WHERE ${conditions.join(' OR ')}
  `;

  // Create an array to hold the parameter values
  const params = searchTerms.flatMap(term => [`%${term}%`, `%${term}%`]);

  // Execute the query with the parameter values
  db.query(query, params, (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(rows);
    }
  });
});



// User registration endpoint
app.post('/register', (req, res) => {
  const { username, password, email, firstName, lastName } = req.body;

  // Hash the password using bcrypt
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error('Error hashing password:', err);
      res.status(500).json({ message: 'Internal Server Error' });
      return;
    }

    // Insert the user into the "users" table
    const query = `
      INSERT INTO users (username, password, email, first_name, last_name)
      VALUES (?, ?, ?, ?, ?)
    `;
    const values = [username, hashedPassword, email, firstName, lastName];

    db.query(query, values, (err, result) => {
      if (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }
      res.status(200).json({ message: 'User registered successfully' });
    });
  });
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
