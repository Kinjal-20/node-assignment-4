const product = [];

exports.getAddProducts = (req, res, next) => {
  console.log("In first the middleware");
  res.render("add-product", {
    docTitle: "Add products",
    path: "admin/add-product",
  });
};

exports.postAddProducts = (req, res, next) => {
  console.log("--form end--");
  product.push({ title: req.body.title });
  console.log(product);
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  console.log("In second the middleware");
  //res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render("shop", {
    prods: product,
    docTitle: "shop",
    path: "/",
  });
};
