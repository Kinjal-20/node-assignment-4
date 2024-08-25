const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  console.log("In first the middleware");
  res.render("add-product", {
    docTitle: "Add products",
    path: "admin/add-product",
  });
};

exports.postAddProducts = (req, res, next) => {
  console.log("--form end--");
  const product = new Product(req.body.title);
  product.save();
  console.log(product);
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  console.log("In second the middleware");
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      docTitle: "shop",
      path: "/",
    });
  });

  //res.sendFile(path.join(rootDir, "views", "shop.html"));
};
