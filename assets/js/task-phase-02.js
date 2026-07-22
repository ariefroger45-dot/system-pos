// Conditional & LOOP

// Soal 1 ==============================================

// const totalPurchase = 20000;

// if (totalPurchase >= 100000) {
//   console.log("Selamat! Anda mendapatkan diskon Rp20.000");
// } else if (totalPurchase >= 50000) {
//   console.log("Selamat! Anda mendapatkan diskon Rp10.000");
// } else {
//   console.log("Maaf, Anda belum mendapatkan diskon.");
// }

// Soal 2 ==============================================

// const userData = {
//   data: {
//     name: "Budi",
//     status: false,
//   },
// };

// if (userData["data"]["status"] == true) {
//   console.log("Selamat datang Budi");
// } else {
//   console.log("Maaf akun Anda tidak aktif.");
// }

// Soal 3 ==============================================

// const paymentMethod = "CASH";

// switch (paymentMethod) {
//   case "CASH":
//     console.log("Pembayaran menggunakan uang tunai");
//     break;
//   case "QRIS":
//     console.log("Pembayaran menggunakan QRIS");
//     break;
//   case "TRANSFER":
//     console.log("Pembayaran menggunakan Transfer Bank");
//     break;
//   default:
//     console.log("Metode pembayaran tidak tersedia.");
// }

// Soal 4 ==============================================

// for (let index = 1; index <= 20; index++) {
//   console.log("Nomor antrean : " + index);
// }

// Soal 5 ==============================================

// for (let index = 1; index <= 15; index++) {
//   console.log("Mencetak label produk ke-" + index);
// }

// Soal 6 ==============================================

// let initialStock = 10;

// while (initialStock > 0) {
//   console.log("Mengirim 1 barang...");
//   initialStock--;
//   console.log(`Sisa stok: ${initialStock}`);
// }

// console.log("Tidak bisa mengirim barang!");
// console.log(`Sisa stok: ${initialStock}`);

// Soal 7

// let batteryGood = true;
// let batteryLevel = 100;

// while (batteryGood) {
//   console.log(`Baterai : ${batteryLevel}%`);
//   batteryLevel -= 20;

//   if (batteryLevel === 0) {
//     batteryGood = false;
//     console.log(`Baterai : ${batteryLevel}% , harap cas!`);
//   }
// }
