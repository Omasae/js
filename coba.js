var v = [
  "untuk proyek Anda dan suplai distributor di Surabaya dan sekitarnya, atau tempat lain di Indonesia",
  "untuk proyek Anda dan suplai distributor di tempat Anda",
  "untuk proyek Anda dan suplai distributor di daerah Anda, serta informasi mengenai cara pemesanan, pengiriman, dan pembayaran",
  "update hari ini dan pemesanan"
];

document.addEventListener("DOMContentLoaded", function() {
  var index = Math.floor((Math.abs(new Date().getTime() - new Date(2023, 6, 6).getTime()) / 72e5) % v.length);
  document.write(v[index]);
});
