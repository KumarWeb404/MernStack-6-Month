const express = require('express');
const productList = require('./modules/porductList');
const filterProduct = require('./modules/filterProduct');
const app = express();

app.get('/', (req, res) => res.send(productList));
app.get('/allproducts', (req, res) => res.send(productList));

app.get('/getproducts', (req, res) => {
  const { category } = req.query;
  //   const output = productList.filter((el) => el.category == category);
  const output = filterProduct(productList, 'category', category);
  res.send(output);
});

app.get('/get_product_price/:price', (req, res) => {
  const { price } = req.params;
  //   const output = productList.filter((el) => el.price <= price);
  const output = filterProduct(productList, 'price', price);
  res.send(output);
});

const port = 5000;
app.listen(port, () => {
  console.log('RUNNING');
});
