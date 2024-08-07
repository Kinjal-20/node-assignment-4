// const http = require("http");
const express = require("express");
const body = require("body-parser");
const path = require("path");
const errorControllers = require("./controllers/errors");

const app = express();
app.set("view engine", "ejs");
//app.set("view engine", "pug");
app.set("views", "views");
app.use(body.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(require("./routes/admin"));
app.use(require("./routes/shop"));

app.use(errorControllers.get404);
// use allows to add new middleware function

// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);
