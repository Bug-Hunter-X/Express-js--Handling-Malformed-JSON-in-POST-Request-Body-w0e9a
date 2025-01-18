const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  try {
    const user = req.body;
    // ... process user data ...
    res.status(201).send(user);
  } catch (error) {
    if (error instanceof SyntaxError) {
      res.status(400).send({ error: 'Invalid JSON in request body' });
    } else {
      console.error(error);
      res.status(500).send({ error: 'Internal server error' });
    }
  }
});

//Now the server handles errors gracefully and does not crash.