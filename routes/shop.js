const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");
const adminRoutes = require("./admin");

router.get("/", (req, res, next) => {
  console.log("In second the middleware");
  //res.sendFile(path.join(rootDir, "views", "shop.html"));
  const products = adminRoutes.products;
  res.render("shop", {
    prods: products,
    docTitle: "shop",
    path: "/",
  });
});

module.exports = router;
