import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res, next) => {
  return res.status(200).send({ message: "Runnning" });
});

app.listen(PORT, () => console.log("Server running!"));
