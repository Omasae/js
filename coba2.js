var u = [
  "1 untuk proyek Anda dan suplai distributor di Surabaya dan sekitarnya, atau tempat lain di Indonesia",
  "2 untuk proyek Anda dan suplai distributor di tempat Anda",
  "3 untuk proyek Anda dan suplai distributor di daerah Anda, serta informasi mengenai cara pemesanan, pengiriman, dan pembayaran",
  "4 untuk proyek Anda dan suplai distributor di tempat Anda",
  "5 untuk proyek Anda dan suplai distributor di daerah Anda, serta informasi mengenai cara pemesanan, pengiriman, dan pembayaran",
  "6 update hari ini dan pemesanan"
];
var v = [
  "1 untuk proyek Anda dan suplai distributor di Surabaya dan sekitarnya, atau tempat lain di Indonesia",
  "2 untuk proyek Anda dan suplai distributor di tempat Anda",
  "3 untuk proyek Anda dan suplai distributor di daerah Anda, serta informasi mengenai cara pemesanan, pengiriman, dan pembayaran",
  "4 update hari ini dan pemesanan"
];
var d = Math.floor((Math.abs(new Date().getTime() - new Date(2023, 6, 6).getTime()) / 3e5) % u.length);
var e = Math.floor((Math.abs(new Date().getTime() - new Date(2023, 6, 6).getTime()) / 2e5) % v.length);
document.write(u[d]+v[e]);
