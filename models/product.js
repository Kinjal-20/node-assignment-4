products = [];

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    //through variable
    products.push(this);
    // push data into through file
  }

  static fetchAll() {
    return products;
  }
};
