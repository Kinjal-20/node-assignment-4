const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");
const product = [];
router.get("/add-product", (req, res, next) => {
  console.log("In first the middleware");
  res.render("add-product", {
    docTitle: "Add products",
    path: "admin/add-product",
  });
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log("--form end--");
  product.push({ title: req.body.title });
  console.log(product);
  res.redirect("/");
});

exports.routers = router;
exports.products = product;
