'use strict';

//functions
const pushProduct = () => {
  if (!productData.find((el) => el.productName == inputProduct.value)) {
    productData.push({ productName: inputProduct.value });
    adminDropdown.innerHTML += `<option>${inputProduct.value}</option>`;
    sendMessage(`Item ${inputProduct.value} added to products`);
  } else {
    sendMessage(`Item ${inputProduct.value} already exists.`);
  }

  messageTimeout();
};

const pushPrice = () => {
  const currIndex = getIndex(adminDropdown.value);
  if (!productData[currIndex].productPrice) {
    sendMessage(`Item price of ${adminDropdown.value} added`);
  } else {
    sendMessage(`Item price of ${adminDropdown.value} updated`);
  }
  productData[currIndex].productPrice = +inputPrice.value;
  messageTimeout();
};

const getIndex = (selectedDropdown) => {
  const index = productData.findIndex(
    (el) => el.productName == selectedDropdown
  );
  return index;
};

const pushDataToDropdown = () => {
  if (!productData.length) return;
  checkoutDropdown.innerHTML = '';
  productData.forEach(
    (el) =>
      (checkoutDropdown.innerHTML += `<option value=${el.productName}>${el.productName} $${el.productPrice}/Unit</option>`)
  );
};

const pushUnit = () => {
  const currIndex = getIndex(checkoutDropdown.value);
  if (checkoutDropdown.value && inputUnit.value) {
    productData[currIndex].totalUnit = +inputUnit.value;
    productData[currIndex].totalPrice =
      productData[currIndex].productPrice * +inputUnit.value;
    alert('Added to cart');
  } else {
    alert('Please select valid product.');
  }
};

const showReceipt = () => {
  if (!productData.find((el) => el.totalUnit)) return;
  const storeDate = new Date();
  const date = storeDate.getDate();
  const month = storeDate.getMonth();
  const year = storeDate.getFullYear();
  const hours = storeDate.getHours();
  const minutes = storeDate.getMinutes();
  const amPm = hours >= 12 ? 'PM' : 'AM';
  showDate.innerText = `${date}/${month}/${year}`;
  showTime.innerText = `${hours}:${minutes} ${amPm}`;
  const total = productData
    .map((el) => el.productPrice * el.totalUnit)
    .reduce((acc, cur) => acc + cur, 0);
  const taxValue = 2.5;
  const amountValue = total + taxValue;
  totalPrice.innerText = total;
  tax.innerText = taxValue;
  amount.innerText = amountValue;
  productData.forEach(
    (el) =>
      (receiptBody.innerHTML += `<tr>
        <td>${el.productName}</td>
        <td>${el.productPrice}</td>
        <td>${el.totalUnit}</td>
        <td>${el.totalPrice}</td>
    </tr>`)
  );
  receiptContainer.style.visibility = 'visible';
};

const messageTimeout = () => {
  setTimeout(() => (adminMessage.textContent = ''), 4000);
};

const sendMessage = (str) => {
  adminMessage.textContent = str;
};

//inputs
const inputProduct = document.getElementById('product-input');
const inputPrice = document.getElementById('price-input');
const inputUnit = document.getElementById('unit-input');

//dropdown
const adminDropdown = document.getElementById('admin-dropdown');
const checkoutDropdown = document.getElementById('checkout-dropdown');

//buttons
const addProductButton = document.getElementById('add-product');
const addPriceButton = document.getElementById('add-price');
const newTransactionButton = document.getElementById('new-transaction');
const addToCartButton = document.getElementById('add-cart');
const numberButtons = document.querySelectorAll(
  '.table__content--number-button'
);
const payButton = document.getElementById('pay');

//message
const adminMessage = document.getElementById('admin-message');

//receipt
const showDate = document.getElementById('showDate');
const showTime = document.getElementById('showTime');
const receiptContainer = document.getElementById('receipt');
const receiptBody = document.getElementById('receipt-body');
const totalPrice = document.getElementById('total-price');
const tax = document.getElementById('tax');
const amount = document.getElementById('amount');

let productData = [];

//events
addProductButton.addEventListener('click', pushProduct);
addPriceButton.addEventListener('click', pushPrice);
newTransactionButton.addEventListener('click', pushDataToDropdown);
numberButtons.forEach((el) =>
  el.addEventListener('click', (e) => {
    inputUnit.value = +e.target.value;
  })
);
addToCartButton.addEventListener('click', pushUnit);
payButton.addEventListener('click', showReceipt);
