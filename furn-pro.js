var t1 = [" Proses produksi",
" Proses pembuatan",
" Metode pembuatan",
" Cara membuat",
" Tindakan membuat",
" Prosedur produksi",
" Tata cara membuat",
" Langkah-langkah membuat",
" Metode produksi"];

var t2 = [" Furniture yang kita produksi tuh jaminan presisi dan kualitasnya, dibikin pake mesin canggih dan modern lagi.",
" Furniture yang kita produksi dijamin presisi dan berkualitas baik, karena dibuat dengan mesin canggih dan modern.",
" Kami menggunakan mesin canggih dan modern",
" Furniture yang kita produksi dibuat dengan menggunakan bahan-bahan berkualitas dan proses produksi yang terjamin.",
" Kami selalu mengutamakan kualitas dalam produksi furniture kami,",
" Furniture kami dibuat dengan menggunakan mesin canggih dan modern,",
" Kami menggunakan bahan-bahan berkualitas dan proses produksi yang terjamin,",
" Furniture kami dibuat dengan desain yang modern dan stylish,",
" Kami menawarkan berbagai macam pilihan furniture dengan proses produksi modern,",
" Kami memberikan perhatian penuh untuk semua furniture yang kami buat,",
" Kami melayani pesanan furniture custom,",
" Kami memberikan harga yang kompetitif dengan tetap mengutamakan mutu produk untuk semua furniture yang kami buat,",
" Kami memberikan layanan pelanggan yang terbaik dan kontrol pengerjaan terbaik pula,"];

var t3 = [" untuk memastikan bahwa furniture yang kita produksi memiliki presisi dan kualitas yang baik.",
" sehingga Anda dapat yakin bahwa furniture yang Anda beli dari kami adalah furniture yang berkualitas.",
" sehingga kami dapat memastikan bahwa furniture yang Anda beli dari kami memiliki presisi dan kualitas yang terbaik.",
" sehingga Anda dapat yakin bahwa furniture yang Anda dapat dari kami adalah furniture yang tahan lama dan tidak mudah rusak.",
" sehingga Anda dapat yakin bahwa furniture yang Anda pesan dari kami akan membuat rumah Anda terlihat lebih indah dan nyaman.",
" agar Anda dapat menemukan furniture yang sesuai dengan kebutuhan dan keinginan Anda.",
" sehingga Anda dapat yakin bahwa Anda mendapatkan produk yang berkualitas dan terjamin.",
" untuk membuat furniture yang sesuai dengan kebutuhan dan keinginan Anda.",
" untuk mendapatkan furniture yang berkualitas dengan harga yang terjangkau.",
" sehingga Anda dapat merasa puas dengan pengalaman mendapatkan furniture dari kami."];
  
function gC(b,a){return a[Math.floor((Math.abs(new Date().getTime()-new Date(2023, 6, 11).getTime())/b)%a.length)]}

var t1i=gC(78e6,t1),t2i=gC(88e6,t2),t3i=gC(28e6,t3);
document.getElementById("produksi").innerHTML = '<p><b>'+t1i+'</b></p><p class="ke">*'+t2i+t3i+'*</p>';
