// const http = require("http");
const express = require("express");
const body = require("body-parser");
const path = require("path");

const app = express();
app.set("view engine", "ejs");
//app.set("view engine", "pug");
app.set("views", "views");
app.use(body.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(require("./routes/admin"));
app.use(require("./routes/shop"));

app.use((req, res, next) => {
  res.render("404", { docTitle: "Page not found", path: "" });
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
// use allows to add new middleware function

// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);
