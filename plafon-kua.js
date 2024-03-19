var s1 = [" Unggul dalam Mutu/Kualitas",
" Mutu/Kualitas Teratas",
" Mutu Berkualitas",
" Standar Kualitas Tinggi",
" Keunggulan Mutu",
" Kualitas Paling Baik",
" Kualitas Terbaik",
" Kualitas Terdepan",
" Mutu Prima",
" Berkualitas",
" Kualitas Unggul",
" Kualitas Terunggul",
" Mutu/Kualitas Terbaik"];

var s2 = [" `Plafon PVC kami hanya menggunakan bahan bermutu dan berkualitas.",
" `Plafon PVC kami hanya menggunakan bahan yang berkualitas tinggi.",
" `Kami hanya menggunakan bahan bermutu tinggi dalam plafon PVC kami.",
" `Bahan bermutu dan berkualitas adalah yang kami gunakan untuk plafon PVC.",
" `Kualitas bahan dalam plafon PVC kami tidak diragukan lagi.",
" `Anda bisa percaya pada mutu bahan yang kami gunakan dalam plafon PVC.",
" `Kami memastikan hanya menggunakan bahan terbaik untuk plafon PVC kami.",
" `Kualitas bahan kami merupakan prioritas utama dalam pembuatan plafon PVC.",
" `Bahan yang kami pilih untuk plafon PVC selalu yang terbaik.",
" `Hanya bahan bermutu yang kami gunakan dalam pembuatan plafon PVC.",
" `Anda dapat mengandalkan keunggulan bahan dalam plafon PVC kami.",
" `Kami komitmen pada kualitas bahan terbaik untuk plafon PVC.",
" `Bahan berkualitas tinggi menjadi standar dalam pembuatan plafon PVC kami.",
" `Kami menjamin keandalan bahan yang digunakan dalam plafon PVC kami.",
" `Plafon PVC kami didukung oleh bahan bermutu dan berkualitas."];

var s3 = [" Karena kami ingin memastikan Plafon PVC tahan lama dan awet.`",
" Untuk memastikan ketahanan dan keawetan, pada Plafon PVC.`",
" Kami mengharapkan Plafon PVC agar tetap kokoh dan awet.`",
" Kami ingin Plafon PVC yang tahan lama dan tidak mudah rusak.`",
" Kami menginginkan Plafon PVC yang bisa bertahan lama dan tetap terlihat baik.`",
" Kami pilih Plafon PVC demi ketahanan dan keawetan yang optimal.`",
" Plafon PVC pilihan untuk menjamin keawetan produk.`",
" Kami memastikan Plafon PVC yang kami pilih memiliki daya tahan yang tinggi.`",
" Keawetan Plafon PVC menjadi fokus utama dalam pemilihan kami.`",
" Kami hanya ingin Plafon PVC yang tahan lama dan dapat dipercaya.`",
" Kami ingin memastikan Plafon PVC yang kami gunakan memiliki umur panjang.`",
" Kami memilih Plafon PVC agar bisa bertahan lama tanpa perlu perbaikan berulang.`",
" Ketahanan dan keawetan adalah alasan kami memilih Plafon PVC.`",
" Kami harus yakin Plafon PVC akan memberikan keandalan dan ketahanan jangka panjang.`",
" Kami ingin Plafon PVC yang dapat bertahan dalam kondisi ekstrem.`",
" Plafon PVC dipilih karena daya tahan dan keawetannya yang terbukti.`",
" Kami ingin Plafon PVC yang tidak hanya memiliki nilai estetika yang baik, tetapi juga tahan lama."];
  
function gC(b,a){return a[Math.floor((Math.abs(new Date().getTime()-tgM)/b)%a.length)]}

var s1i=gC(168e6,s1),s2i=gC(178e6,s2),s3i=gC(118e6,s3);
document.getElementById("mutu1").innerHTML = '<p><b>'+s1i+'</b></p><p class="ke">'+s2i+s3i+'</p>';
