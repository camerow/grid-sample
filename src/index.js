import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import faker from 'faker';

const products = [],
      transactions = [];

for (var i = 0; i < 100; i++) {
  let productUUID = faker.random.uuid();

  const product = {
    id: productUUID,
    data: {
      productCategory: faker.commerce.productAdjective(),
      productName: faker.commerce.productName()
    }
  };

  products.push(product);

  for (var j = 0; j < Math.floor(Math.random() * 50); j++) {
    const transaction = {
      id: faker.random.uuid(),
      product: productUUID,
      data: {
        date: faker.date.past(),
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        transaction: faker.finance.transactionType()
      }
    }
    transactions.push(transaction);
  }
}

const appData = {
  products,
  transactions
};

ReactDOM.render(
  <App data={appData} />,
  document.getElementById('root')
);
