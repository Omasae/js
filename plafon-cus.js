document.write(tgM);document.write('----');
var r1 = [" Pesan Plafon PVC Sesuai Keinginan",
" Pesan Plafon PVC Dengan Keinginan keluarga Anda",
" Dapatkan Plafon PVC yang Diinginkan",
" Pilih Plafon PVC Sesuai Keinginan",
" Dapatkan Plafon PVC Impian Anda",
" Pesan Plafon PVC Menurut Mau Anda",
" Dapatkan Plafon PVC yang Disesuaikan dengan Anda",
" Pilih Pesanan Plafon PVC yang Diinginkan",
" Dapatkan Plafon PVC yang Cocok dengan Keinginan keluarga Anda",
" Pesan Plafon PVC Sesuai dengan Keinginan Anda",
" Dapatkan Plafon PVC yang Anda Inginkan",
" Pilih Plafon PVC yang Disesuaikan dengan Kepribadian",
" Dapatkan Plafon PVC yang Menggambarkan Keinginan Anda",
" Pesan Plafon PVC dan Wujudkan Impian Anda",
" Dapatkan Plafon PVC dengan Desain yang Diinginkan",
" Pilih Pesanan Plafon PVC yang Memenuhi Kepuasan",
" Dapatkan Plafon PVC yang Menggambarkan Keinginan keluarga Anda",
" Pesan Plafon PVC dengan Spesifikasi Sesuai Keinginan",
" Dapatkan Plafon PVC yang Menggambarkan Selera Anda",
" Pesan Plafon PVC Sesuai Harapanmu"];

var r2 = [" Kami siap memenuhi kebutuhan Plafon PVCmu dengan desain custom.",
" Dengan desain custom, kami siap memenuhi kebutuhan Plafon PVCmu.",
" Pesan Plafon PVC dengan desain custom dan kebutuhanmu terpenuhi.",
" Kami hadir untuk memenuhi kebutuhan Plafon PVCmu dengan desain custom.",
" Pesan Plafon PVC dengan desain kustom sesuai Keinginan keluarga Anda.",
" Dengan desain custom, kebutuhan Plafon PVCmu dapat terpenuhi.",
" Pilih Plafon PVC dengan desain custom agar Keinginan keluarga Anda terwujud.",
" Dapatkan Plafon PVC sesuai kebutuhan dengan desain custom.",
" Kami siap menghadirkan Plafon PVC custom yang sesuai Keinginan keluarga Anda.",
" Pesan Plafon PVC sesuai kebutuhan dengan desain custom dari kami.",
" Dengan desain kustom, Plafon PVCmu akan disesuaikan dengan Keinginan keluarga Anda.",
" Pilih Plafon PVC dengan desain khsusus untuk memenuhi kebutuhanmu.",
" Dapatkan Plafon PVC yang sesuai dengan desain custom pilihan Anda.",
" Pesan Plafon PVC dan desain spesial sesuai Keinginan keluarga Anda bersama kami.",
" Kami menghadirkan solusi Plafon PVC dengan desain custom untukmu.",
" Dapatkan Plafon PVC unik dengan desain custom yang kami sediakan.",
" Pilih Plafon PVC dengan desain unik agar kebutuhanmu terpenuhi."];

var r3 = [" Anda bisa pilih sendiri ukuran, warna, dan bentuknya sesuai yang Anda mau.",
" Ukuran, warna, dan bentuknya bisa Anda pilih sendiri sesuai yang Anda mau.",
" Sesuaikan ukuran, warna, dan bentuknya sesuai Keinginan keluarga Anda.",
" Pilih sendiri ukuran, warna, dan bentuknya sesuai keinginan hatimu.",
" Anda berhak memilih ukuran, warna, dan bentuknya sesuai yang Anda inginkan.",
" Sesuaikan ukuran, warna, dan bentuknya sesuai dengan Keinginan keluarga Anda.",
" Ukuran, warna, dan bentuknya bisa Anda atur sendiri sesuai Keinginan keluarga Anda.",
" Anda bisa menentukan ukuran, warna, dan bentuknya sesuai dengan Keinginan keluarga Anda.",
" Pilih ukuran, warna, dan bentuknya sendiri yang sesuai dengan Keinginan keluarga Anda.",
" Anda bebas memilih ukuran, warna, dan bentuknya sesuai keinginan yang Anda miliki.",
" Sesuai dengan Keinginan keluarga Anda, pilih sendiri ukuran, warna, dan bentuknya.",
" Anda bisa menyesuaikan ukuran, warna, dan bentuknya sesuai dengan yang Anda mau.",
" Ukuran, warna, dan bentuknya bisa Anda pilih sendiri sesuai selera Anda.",
" Anda berhak untuk memilih ukuran, warna, dan bentuknya sesuai keinginan hati.",
" Sesuaikan ukuran, warna, dan bentuknya sesuai keinginan dan preferensimu."];
  
function gC(b,a){return a[Math.floor((Math.abs(new Date().getTime()-tgM)/b)%a.length)]}

var r1i=gC(178e6,r1),r2i=gC(188e6,r2),r3i=gC(128e6,r3);
document.write('<p><b>'+r1i+'</b></p><p class="ke">'+r2i+r3i+'</p>');
document.getElementById("custom").innerHTML = '<p><b>'+r1i+'</b></p><p class="ke">'+r2i+r3i+'</p>';
