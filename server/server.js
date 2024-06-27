const express = require('express');
const bodyParser = require('body-parser');
const contactRoute = require('./routes/contact');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 4000;

// Middleware to serve static files
app.use(express.static(__dirname + '/client/dist'));

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// API Routes
app.use('/api', contactRoute);

// Serve the index.html for any other routes
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/client/dist/index.html');
});
console.log(process.env.EMAIL_USER);
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

