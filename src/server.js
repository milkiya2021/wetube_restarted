import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

// const logger = (req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// };

// const privateMiddleware = (req, res, next) => {
//   const url = req.url;
//   if (url === "/protected") {
//     return res.send("<h1>Not allowed!!!!<h1>");
//   }
//   console.log("Allowed. you may contine");
//   next();
// };

const handleHome = (req, res) => {
  return res.send("I love middleware");
};

const handleProtected = (req, res) => {
  return res.send("This is login");
};

app.use(logger);
// app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () => console.log(`Sever listening on port ${PORT}👍`);

app.listen(PORT, handleListening);
