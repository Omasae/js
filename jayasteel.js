var t1 = [" Jual",
" Menjual",
" Dijual",
" Harga",
" Update Harga",
" Harga Terbaru",
" Harga Hari Ini",
" Harga Terkini",
" Update Harga Terbaru",
" Update Harga Hari Ini",
" Update Harga Terkini"];

var f5 = [" untuk proyek anda dan untuk suplai distributor di Surabaya dan sekitarnya atau tempat lain di Indonesia",
"",
" sesuai dengan yang anda butuhkan",
" untuk keperluan anda",
" untuk proyek anda atau stok toko anda",
" untuk proyek anda dan untuk suplai distributor di tempat anda",
" untuk proyek anda dan untuk suplai distributor di daerah anda, juga mengenai cara order, pengiriman, dan pembayaran",
" untuk kebutuhan anda, mengenai stok, pengiriman dan yang lain",
" untuk melayani proyek customer anda",
" sesuai permintaan anda dan pelanggan anda",
" dan jangan ragu untuk menghubungi kami segera",
" update hari ini dan pemesanan"];

var y7 = [" Besi Beton",
" besi beton neser",
" betoneser (besi beton)",
" besi cor",
" baja tulangan beton",
" Baja Tulangan",
" besi beton (deform bar)",
" besi batangan (besi beton)",
" besi bulat / besi beton"];
  
var y8 = [" Wiremesh",
" wire mesh",
" Wermes (wiremesh)",
" anyaman besi (wiremesh)",
" besi Wiremesh",
" besi anyaman cor (wire mesh)"];

var arrb = [" Januari"," Februari"," Maret"," April"," Mei"," Juni"," Juli"," Agustus"," September"," Oktober"," November"," Desember"];
var date = new Date();
var bln = date.getMonth();
var bln = arrb[bln];
var bul = bln;
var thn = date.getFullYear();

function gA(arr) {
var c = new Date();
var d = Math.abs(c.getTime() - new Date(2023, 6, 6).getTime());
var e = Math.floor(d / 7.2e6);
var f = e % arr.length;
return arr[f];
}
var y7i=gA(y7),y8i=gA(y8),t1i=gA(t1),f5i=gA(f5);
