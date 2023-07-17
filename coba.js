var v = ["1 untuk proyek Anda dan suplai distributor di Surabaya dan sekitarnya, atau tempat lain di Indonesia",
"2 untuk proyek Anda dan suplai distributor di tempat Anda",
"3 untuk proyek Anda dan suplai distributor di daerah Anda, serta informasi mengenai cara pemesanan, pengiriman, dan pembayaran",
"4 update hari ini dan pemesanan"];
document.addEventListener("DOMContentLoaded",()=>{
  var e=Math.floor((Math.abs(new Date()-new Date(2023,6,6))/2e5)%v.length);
  document.write(v[e])
});
