// 1. conditional

// let totalPurchase = 3500;
// let discount = 0;
// let bonus = "";

// if (totalPurchase == 3000) {
//   discount = 2000;
//   console.log(`Selamat ! anda mendapat diskon sebesar : ${discount}`);
// } else if (totalPurchase > 4500) {
//   discount = 3000;
//   bonus = "Cangkir Estetik!";
//   console.log(
//     `Selamat ! anda mendapat diskon sebesar : ${discount} \n dan bonus ${bonus}`,
//   );
// } else if (totalPurchase != 3500) {
//   discount = 1000;
//   console.log(`Selamat ! anda mendapat diskon sebesar : ${discount}`);
// } else {
//   discount = 0;
//   console.log(`Total belanja anda belum memenuhi 6000, tidak dapat diskon`);
// }

// use case akun user

// const userData = {
//   data: {
//     name: "budi",
//     adress: "batam",
//     no_phone: 62812345678,
//     status: true,
//   },
// };

// let messageResponse = "";

// if (userData["data"]["status"] == false) {
//   messageResponse = "Maaf akun anda tidak aktif!";
//   console.log(messageResponse);
// } else {
//   messageResponse = "Selamat akun anda sudah aktif";
//   console.log(messageResponse);
// }

// const paymentMethod = "QRIS";

// switch (paymentMethod) {
//   case "CASH":
//     console.log("Buka laci uang otomatis");
//     break;
//   case "QRIS":
//     console.log("Tampilkan kode QR di layar kasir");
//     break;
//   default:
//     console.log("Metode pembayaran tidak dikenal");
// }

// 2. loop

// for loop

// for (let index = 1; index < 100; index++) {
//   console.log("Mencetak struk untuk item nomor ke-" + index);
// }

// for (let nomor = 1; nomor < 100; nomor++) {
//   console.log("Antrean ke-" + nomor);
// }

// while loop
// let receiptPaper = 3;

// while (receiptPaper > 0) {
//   console.log(`Mencetak struk transaksi... Sisa kertas: ${receiptPaper}`);
//   receiptPaper--;
// }

let cash = 5000000;

while (cash > 0) {
  console.log(`ATM mengeluarkan uang Rp 100.000`);
  cash -= 100000;
}

// 3. function and scope
