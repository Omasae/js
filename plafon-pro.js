var t1 = [" Proses produksi",
" Proses pembuatan",
" Metode pembuatan",
" Cara membuat",
" Tindakan membuat",
" Prosedur produksi",
" Tata cara membuat",
" Langkah-langkah membuat",
" Metode produksi"];

var t2 = [" Plafon PVC yang kita produksi tuh jaminan presisi dan kualitasnya, dibikin pake mesin canggih dan modern lagi.",
" Plafon PVC yang kita produksi dijamin presisi dan berkualitas baik, karena dibuat dengan mesin canggih dan modern.",
" Kami menggunakan mesin canggih dan modern",
" Plafon PVC yang kita produksi dibuat dengan menggunakan bahan-bahan berkualitas dan proses produksi yang terjamin.",
" Kami selalu mengutamakan kualitas dalam produksi Plafon PVC kami,",
" Plafon PVC kami dibuat dengan menggunakan mesin canggih dan modern,",
" Kami menggunakan bahan-bahan berkualitas dan proses produksi yang terjamin,",
" Plafon PVC kami dibuat dengan desain yang modern dan stylish,",
" Kami menawarkan berbagai macam pilihan Plafon PVC dengan proses produksi modern,",
" Kami memberikan perhatian penuh untuk semua Plafon PVC yang kami buat,",
" Kami melayani pesanan Plafon PVC custom,",
" Kami memberikan harga yang kompetitif dengan tetap mengutamakan mutu produk untuk semua Plafon PVC yang kami buat,",
" Kami memberikan layanan pelanggan yang terbaik dan kontrol pengerjaan terbaik pula,"];

var t3 = [" untuk memastikan bahwa Plafon PVC yang kita produksi memiliki presisi dan kualitas yang baik.",
" sehingga Anda dapat yakin bahwa Plafon PVC yang Anda beli dari kami adalah Plafon PVC yang berkualitas.",
" sehingga kami dapat memastikan bahwa Plafon PVC yang Anda beli dari kami memiliki presisi dan kualitas yang terbaik.",
" sehingga Anda dapat yakin bahwa Plafon PVC yang Anda dapat dari kami adalah Plafon PVC yang tahan lama dan tidak mudah rusak.",
" sehingga Anda dapat yakin bahwa Plafon PVC yang Anda pesan dari kami akan membuat rumah Anda terlihat lebih indah dan nyaman.",
" agar Anda dapat menemukan Plafon PVC yang sesuai dengan kebutuhan dan keinginan Anda.",
" sehingga Anda dapat yakin bahwa Anda mendapatkan produk yang berkualitas dan terjamin.",
" untuk membuat Plafon PVC yang sesuai dengan kebutuhan dan keinginan Anda.",
" untuk mendapatkan Plafon PVC yang berkualitas dengan harga yang terjangkau.",
" sehingga Anda dapat merasa puas dengan pengalaman mendapatkan Plafon PVC dari kami."];
  
function gC(b,a){return a[Math.floor((Math.abs(new Date().getTime()-new Date(2023, 11, 11).getTime())/b)%a.length)]}

var t1i=gC(278e6,t1),t2i=gC(288e6,t2),t3i=gC(228e6,t3);
document.getElementById("produksi").innerHTML = '<p><b>'+t1i+'</b></p><p class="ke">*'+t2i+t3i+'*</p>';
