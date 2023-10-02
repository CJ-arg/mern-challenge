const express = require('express');
require("dotenv").config();


const app = express();

app.use(express.static("../"));
// app.get("/api", (req, res) => {
//   res.json({ ok: true });
// });
app.listen(process.env.PORT, () => {
  console.log(`Server running in port ${process.env.PORT}`);
});
