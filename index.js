import express from "express";
const app = express();
const PORT = process.env.PORT;

app.get("/", (_req, res) => res.send(`Opening Nodejs : ${PORT}`));
app.listen(PORT, () => console.log(`Nodejs listening on port ${PORT}`));
