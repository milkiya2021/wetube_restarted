import express from "express";

const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
  return res.send("I still with you");
};

const handleLogin = (req, res) => {
  return res.send("This is login");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`Sever listening on port ${PORT}👍`);

app.listen(PORT, handleListening);
