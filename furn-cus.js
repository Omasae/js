var r1 = [" Pesan Furnitur Sesuai Keinginan",
" Pesan Furnitur Dengan Keinginanmu",
" Dapatkan Furnitur yang Diinginkan",
" Pilih Furnitur Sesuai Keinginan",
" Dapatkan Furnitur Impianmu",
" Pesan Furnitur Menurut Maumu",
" Dapatkan Furnitur yang Disesuaikan denganmu",
" Pilih Pesanan Furnitur yang Diinginkan",
" Dapatkan Furnitur yang Cocok dengan Keinginanmu",
" Pesan Furnitur Sesuai dengan Keinginan kamu",
" Dapatkan Furnitur yang kamu Inginkan",
" Pilih Furnitur yang Disesuaikan dengan Kepribadian",
" Dapatkan Furnitur yang Menggambarkan Keinginan kamu",
" Pesan Furnitur dan Wujudkan Impianmu",
" Dapatkan Furnitur dengan Desain yang Diinginkan",
" Pilih Pesanan Furnitur yang Memenuhi Kepuasan",
" Dapatkan Furnitur yang Menggambarkan Keinginanmu",
" Pesan Furnitur dengan Spesifikasi Sesuai Keinginan",
" Dapatkan Furnitur yang Menggambarkan Selera kamu",
" Pesan Furnitur Sesuai Harapanmu"];

var r2 = [" Kami siap memenuhi kebutuhan furniturmu dengan desain custom.",
" Dengan desain custom, kami siap memenuhi kebutuhan furniturmu.",
" Pesan furnitur dengan desain custom dan kebutuhanmu terpenuhi.",
" Kami hadir untuk memenuhi kebutuhan furniturmu dengan desain custom.",
" Pesan furnitur dengan desain kustom sesuai keinginanmu.",
" Dengan desain custom, kebutuhan furniturmu dapat terpenuhi.",
" Pilih furnitur dengan desain custom agar keinginanmu terwujud.",
" Dapatkan furnitur sesuai kebutuhan dengan desain custom.",
" Kami siap menghadirkan furnitur custom yang sesuai keinginanmu.",
" Pesan furnitur sesuai kebutuhan dengan desain custom dari kami.",
" Dengan desain kustom, furniturmu akan disesuaikan dengan keinginanmu.",
" Pilih furnitur dengan desain khsusus untuk memenuhi kebutuhanmu.",
" Dapatkan furnitur yang sesuai dengan desain custom pilihanmu.",
" Pesan furnitur dan desain spesial sesuai keinginanmu bersama kami.",
" Kami menghadirkan solusi furnitur dengan desain custom untukmu.",
" Dapatkan furnitur unik dengan desain custom yang kami sediakan.",
" Pilih furnitur dengan desain unik agar kebutuhanmu terpenuhi."];

var r3 = [" Kamu bisa pilih sendiri ukuran, warna, dan bentuknya sesuai yang kamu mau.",
" Ukuran, warna, dan bentuknya bisa kamu pilih sendiri sesuai yang kamu mau.",
" Sesuaikan ukuran, warna, dan bentuknya sesuai keinginanmu.",
" Pilih sendiri ukuran, warna, dan bentuknya sesuai keinginan hatimu.",
" Kamu berhak memilih ukuran, warna, dan bentuknya sesuai yang kamu inginkan.",
" Sesuaikan ukuran, warna, dan bentuknya sesuai dengan keinginanmu.",
" Ukuran, warna, dan bentuknya bisa kamu atur sendiri sesuai keinginanmu.",
" Kamu bisa menentukan ukuran, warna, dan bentuknya sesuai dengan keinginanmu.",
" Pilih ukuran, warna, dan bentuknya sendiri yang sesuai dengan keinginanmu.",
" Kamu bebas memilih ukuran, warna, dan bentuknya sesuai keinginan yang kamu miliki.",
" Sesuai dengan keinginanmu, pilih sendiri ukuran, warna, dan bentuknya.",
" Kamu bisa menyesuaikan ukuran, warna, dan bentuknya sesuai dengan yang kamu mau.",
" Ukuran, warna, dan bentuknya bisa kamu pilih sendiri sesuai selera kamu.",
" Kamu berhak untuk memilih ukuran, warna, dan bentuknya sesuai keinginan hati.",
" Sesuaikan ukuran, warna, dan bentuknya sesuai keinginan dan preferensimu."];
  
function gC(b,a){return a[Math.floor((Math.abs(new Date().getTime()-tgM)/b)%a.length)]}

var r1i=gC(78e6,r1),r2i=gC(88e6,r2),r3i=gC(28e6,r3);
document.getElementById("produksi").innerHTML = '<p><b>'+r1i+'</b></p><p class="ke">*'+r2i+r3i+'*</p>';