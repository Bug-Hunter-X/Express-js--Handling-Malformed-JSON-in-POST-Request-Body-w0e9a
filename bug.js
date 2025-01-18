const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // ... process user data ...
  res.status(201).send(user);
});

// Problem: The above code is vulnerable to the 'Unexpected Token <' error if the request body is not valid JSON.

// Example of a request that causes the error:
// curl -X POST -H "Content-Type: application/json" -d '<html>...</html>' http://localhost:3000/users

// This will result in the server crashing with an error similar to:
// SyntaxError: Unexpected token '<'
