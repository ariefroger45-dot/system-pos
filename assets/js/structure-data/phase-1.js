// Javascript Data Structure

// 1. Array Structure Data

// const coffeeMenu = [
//   "Espresso",
//   "Coffee Latte",
//   "Cappucino",
//   "Amerocano",
//   "v60",
// ];

// console.log(coffeeMenu[0]);
// console.log(coffeeMenu[1]);

// console.log(coffeeMenu.length);

// 2. Object Structure Data

// const productItem = {
//   name: "Ice Palm Sugar Latte",
//   price: 25000,
//   isAvailable: true,
//   category: "Coffee",
// };

// console.log(productItem.name);
// console.log(productItem.price);

// 3. Data Manipulation

let cartItem = ["Espresso", "Croissant"];

// a. Manipulasi pakai PUSH (menambahkan data baru)

cartItem.push("Matcha");
console.log("Menambahkan data baru", cartItem);

// b. Manipulasi pakai POP (delete data terakhir)
cartItem.pop();
console.log("Menghapus data baru", cartItem);

// c. Manipulasi data object

const productItem = {
  name: "Ice Palm Sugar Latte",
  price: 25000,
  isAvailable: true,
  category: "Coffee",
};

productItem.price = 50000;
console.log(productItem.price);
