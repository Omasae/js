var pro = ["proyek","rencana", "inisiatif", "tugas", "penggarapan", "pekerjaan", "aktivitas", "program", "rancangan", "pembangunan", "penyusunan", "perencanaan", "implementasi", "pembuatan", "pengembangan", "eksekusi", "pengerjaan", "penelitian"];

var kons = ["konstruksi", " konstruksi bangunan", " rekayasa", " infrastruktur", " rancangan bangunan", " struktur", " gedung", " bangunan", " konstruksi sipil", " proses pembangunan", " struktur bangunan", " pengembangan properti", " infrastruktur", " pembangunan fisik", " peletakan dasar", " pembangunan fisik", " peletakan dasar"];

var bah = ["bahan bangunan", "material konstruksi", "komponen bangunan", "barang konstruksi", "perangkat bangunan", "perlengkapan bangunan", "komoditas bangunan", "komponen struktural", "fitting bangunan", "bagian pembangunan", "produk konstruksi", "sarana konstruksi", "elemen bangunan", "produk bangunan", "bahan konstruksi", "barang konstruksi", "perlengkapan konstruksi", "alat bangunan", "aksesori bangunan", "material pembangunan", "perkakas bangunan"];
var kam = ["kami","admin kami", "tim kami", "petugas kami", "sales kami", "mitra Jayasteel", "petugas Jayasteel"];
var rin = ["baja ringan","galvalum", "profile", "produk baja lain", "produk baja yang lain", "produk besi"];

function gA(a, b) {
  var c = new Date(),
    d = Math.abs(c.getTime() - b.getTime()),
    e = Math.floor(d / 4e4),
    f = e % a.length;
  return a[f]
}
function uD(a, b) {
  var c = new Date(2023, 6, 6),
    d = gA(a, c);
  window[b] = d
}
var proyek="",konstruksi="",bahan="",kami="",ringan="";
uD(pro, "proyek"),uD(kons,"konstruksi"),uD(bah,"bahan"),uD(kam,"kami"),uD(rin,"ringan");
