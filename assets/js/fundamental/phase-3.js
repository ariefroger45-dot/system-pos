// 1. function

// function calculateChange(receivedAmount, totalPrice) {
//   let changeAmount = receivedAmount - totalPrice;
//   return changeAmount;
// }

// let userChanges = calculateChange(15000, 5000);
// console.log(userChanges);

// arrow function

// const calculateChange = (receivedAmount, totalPrice) => {
//   let changeAmount = receivedAmount - totalPrice;
//   return changeAmount;
// };

// let userChanges = calculateChange(15000, 5000);
// console.log(userChanges);

// const calculateTax = (totalPrice, tax) => {
//   let totalWithTax = totalPrice + tax;
//   return totalWithTax;
// };

// let payment = calculateTax(15000, 2500);
// console.log(payment);

// const checkStock = (stock) => {
//   if (stock >= 1) {
//     return "Barang tersedia";
//   }

//   return "Barang tidak tersedia!";
// };

// let result = checkStock(1);
// console.log(result);

// const checkLate = (employeeName, checkInHour);

// USE CASE ================
// const calculatePayment = (downPayment, totalPayment) => {
//   let mustPay = totalPayment - downPayment;
//   return mustPay;
// };

// let paymentLeft = calculatePayment(500000, 2800000);

// if (paymentLeft == 0) {
//   console.log("Sudah Lunas");
// } else {
//   console.log("Belum Lunas");
// }

// console.log(paymentLeft);

// =========================

// 2. Error Runtime vs Error Logic

let itemPrice = 15000;
let qty = 2;

//Error Runtime
try {
  let total = itemPrice + qti; // typo in
} catch (error) {
  console.log(`[Runtime Error Detected]: ${error}`);
}

// Error Logic

let discountValue = 5000;
let wrongTotal = itemPrice * (qty - discountValue);

console.log(`[Logic error]: Total belanja di struk jadi minus Rp${wrongTotal}`);
