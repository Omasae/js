var pro=["proyek","rencana","inisiatif","tugas","penggarapan","pekerjaan","aktivitas","program","rancangan","pembangunan","penyusunan","perencanaan","implementasi","pembuatan","pengembangan","eksekusi","pengerjaan","penelitian"],
    kons=["konstruksi","konstruksi bangunan","rekayasa","infrastruktur","rancangan bangunan","struktur","gedung","bangunan","konstruksi sipil","proses pembangunan","struktur bangunan","pengembangan properti","infrastruktur","pembangunan fisik","peletakan dasar bangunan","pembangunan fisik","peletakan dasar"],
    bah=["bahan bangunan","material konstruksi","komponen bangunan","barang konstruksi","perangkat bangunan","perlengkapan bangunan","komoditas bangunan","komponen struktural","fitting bangunan","bagian pembangunan","produk konstruksi","sarana konstruksi","elemen bangunan","produk bangunan","bahan konstruksi","barang konstruksi","perlengkapan konstruksi","alat bangunan","aksesori bangunan","material pembangunan","perkakas bangunan"],
    kam=["kontak kami","admin kami","tim kami","petugas kami","sales kami","tim mitra Jayasteel","petugas Jayasteel"],
    rin=["baja ringan","galvalum","profile","produk baja lain","produk baja yang lain","produk besi"];
function gA(a){return a[Math.floor((Math.abs(new Date().getTime()-new Date(2023,6,6).getTime())/4e6)%a.length)]}
var proyek=gA(pro),konstruksi=gA(kons),bahan=gA(bah),kami=gA(kam),ringan=gA(rin);
