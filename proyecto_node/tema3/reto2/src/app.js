const express = require("express");
const cors = require("cors");
const userRoutes = require("./routers/user.routers");
const errorHandling = require("./error/errorHandling");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("Peticion recibida del cliente");
  console.log("URL: " + req.url);
  console.log("Metodo: " + req.method);
  console.log("User-agent: " + req.headers["user-agent"]);
  res.status(200).json({ ok:true, message:"Recibido" });    
});

app.use(userRoutes);

app.use(errorHandling);

module.exports = app;