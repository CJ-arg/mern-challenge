import express from "express";
const PORT = 4000;
const app = express();

app.get("/api", (req, res) => {
  res.json({ ok: true });
});
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
