var pro = ["proyek","rencana", "inisiatif", "tugas", "penggarapan", "pekerjaan", "aktivitas", "program", "rancangan", "pembangunan", "penyusunan", "perencanaan", "implementasi", "pembuatan", "pengembangan", "eksekusi", "pengerjaan", "penelitian"];

var kons = ["konstruksi", "konstruksi bangunan", "rekayasa", "infrastruktur", "rancangan bangunan", "struktur", "gedung", "bangunan", "konstruksi sipil", "proses pembangunan", "struktur bangunan", "pengembangan properti", "infrastruktur", "pembangunan fisik", "peletakan dasar bangunan", "pembangunan fisik", "peletakan dasar"];

var bah = ["bahan bangunan", "material konstruksi", "komponen bangunan", "barang konstruksi", "perangkat bangunan", "perlengkapan bangunan", "komoditas bangunan", "komponen struktural", "fitting bangunan", "bagian pembangunan", "produk konstruksi", "sarana konstruksi", "elemen bangunan", "produk bangunan", "bahan konstruksi", "barang konstruksi", "perlengkapan konstruksi", "alat bangunan", "aksesori bangunan", "material pembangunan", "perkakas bangunan"];
var kam = ["kami","admin kami", "tim kami", "petugas kami", "sales kami", "mitra Jayasteel", "petugas Jayasteel"];
var rin = ["baja ringan","galvalum", "profile", "produk baja lain", "produk baja yang lain", "produk besi"];

function gA(arr) {
  var c = new Date();
  var d = Math.abs(c.getTime() - new Date(2023, 7, 7).getTime());
  var e = Math.floor(d / 4e4);
  var f = e % arr.length;
  return arr[f];
}

var proyek = gA(pro);
var konstruksi = gA(kons);
var bahan = gA(bah);
var kami = gA(kam);
var ringan = gA(rin);
