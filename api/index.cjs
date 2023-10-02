const express = require('express');
require("dotenv").config();


const app = express();
// public directory
app.use(express.static("../"));

// lectura parse BODY
app.use(express.json())

// Rutes
app.use('/api/auth', require('./routes/auth.cjs' ))


app.listen(process.env.PORT, () => {
  console.log(`Server running in port ${process.env.PORT}`);
});
