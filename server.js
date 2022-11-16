const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const buildPath = path.join(__dirname, 'build')

app.use(express.static(buildPath))
app.use(express.json())

// gets the static files from the build folder
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
})

// Showing that the server is up and running
app.listen(port, () => {
  console.log(`Server is online on port: ${port}`)
})
