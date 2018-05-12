var totalPrice = 0;
const spendingThreshold = 100;
const phonePrice = 65.5;
const accessoryPrice = 9.9;
const tax = 20;

var bankAmount = Number(prompt("amount?"));

var taxedPhone = calculateTax(phonePrice);
var taxedAccessory = calculateTax(accessoryPrice);

while (bankAmount >= taxedPhone) {
  if (
    taxedAccessory + taxedPhone <= spendingThreshold &&
    bankAmount >= taxedAccessory + taxedPhone
  ) {
    taxedPhone += taxedAccessory;
    totalPrice += taxedPhone;
    bankAmount -= taxedPhone;
  } else {
    totalPrice += taxedPhone;
    bankAmount -= taxedPhone;
    console.log("comprato solo cellulare");
  }
}

function calculateTax(amount) {
  return amount + amount * tax / 100;
}

var msg =
  "total amount spent: " +
  totalPrice.toFixed(2) +
  "$ bank amount: " +
  bankAmount.toFixed(2) +
  "$";
alert(msg);
