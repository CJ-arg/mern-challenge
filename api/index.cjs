const express = require('express');
require("dotenv").config();


const app = express();

app.use(express.static("../"));

app.use('/api/auth', require('./routes/auth.cjs' ))


app.listen(process.env.PORT, () => {
  console.log(`Server running in port ${process.env.PORT}`);
});