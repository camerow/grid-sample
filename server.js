'use strict';

var express = require('express');
var app = express();
var lodb = require('lodb');
var faker = require('faker');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(8080, function () {
  makeData();
  console.log('Example app listening on port 3000!');
});
// make 100 random entries
function makeData() {
  let db = lodb('db.json');
  for (var i = 0; i < 100; i++) {
    const products = {
      id: i,
      data: {
        productCategory: faker.commerce.productAdjective(),
        productName: faker.commerce.productName()
      }
    };
    
    db('products').push(products);

    for (var j = 0; j < Math.floor(Math.random() * 50); j++) {
      const transactions = {
        id: i,
        data: {
          date: faker.date.past(),
          name: faker.name.firstName() + ' ' + faker.name.lastName(),
          transaction: faker.finance.transactionType()
        }
      }
      db('transactions').push(transactions);
    }

  }
}
