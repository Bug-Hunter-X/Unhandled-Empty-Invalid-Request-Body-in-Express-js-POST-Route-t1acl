const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  if (!user || Object.keys(user).length === 0) {
    return res.status(400).send({ error: 'Request body is empty' });
  }
  // Add more robust validation here as needed (e.g., using a schema validation library)
  // ...
  console.log('Creating user:', user);
  res.status(201).send(user);
});
app.listen(3000, () => console.log('Server listening on port 3000'));