var t1 = new Array ();
t1[0] = "Jasa ";
t1[1] = "Jasa/Layanan ";
t1[2] = "Layanan ";
t1[3] = "Ongkos ";
t1[4] = "Update Ongkos ";
t1[5] = "Ongkos Terbaru ";
t1[6] = "Harga Hari Ini ";
t1[7] = "Harga Terkini ";

var t2 = new Array ();
t2[0] = "dan Info ";
t2[1] = "juga Tentang ";
t2[2] = "& Mengenai ";
t2[3] = "dan ";
t2[4] = "& ";
t2[5] = "- ";
t2[6] = "dalam ";

arrb = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
date = new Date();
bln = date.getMonth();
bln = arrb[bln]
thn = date.getFullYear();

var r3 = new Array ();
r3[0] = " Sedang mencari ";
r3[1] = " Anda Searching ";
r3[2] = " Mencari ";
r3[3] = " Anda ingin memperoleh ";
r3[4] = " Ingin mendapat ";
r3[5] = " Sedang mencari tahu ";
r3[6] = " Untuk mendapatkan review terbaru ";
r3[7] = " Cari-cari ";
r3[8] = " Mau mendapatkan  ";
r3[9] = " Berharap peroleh ";
r3[10] = " Hendak cari  ";
r3[11] = " Anda mencari  ";
r3[12] = " Cari perkembangan ";
r3[13] = " Anda mencari update ";
r3[14] = " Anda ingin dapat pembaruan ";
r3[15] = " Anda ingin berita terkini ";

var r4 = new Array ();
r4[0] = " yang berhubungan dengan ";
r4[1] = " tentang ";
r4[2] = " perihal atau mengenai ";
r4[3] = " mengenai ";
r4[4] = " hal yang berkaitan dengan ";
r4[5] = " sehubungan dengan ";
r4[6] = " dalam hal yang ada kaitannya dengan ";
r4[7] = " untuk  ";
r4[8] = " yang ada hubungannya dengan ";
r4[9] = " bersangkutan dengan ";
r4[10] = " yang ada sangkutannya dengan ";
r4[11] = " info tambahan tentang ";
r4[12] = " artikel mengenai ";
r4[13] = " berita tentang ";

var j1 = new Array ();
j1[0] = " ";
j1[1] = " update";
j1[2] = " untuk";

var j2 = new Array ();
j2[0] = " harga";
j2[1] = " perkembangan";
j2[2] = " info";
j2[3] = " informasi";
j2[4] = " kabar";
j2[5] = " berita";
j2[6] = " ";

var j3 = new Array ();
j3[0] = " terbaru";
j3[1] = " bulan ini terbaik";
j3[2] = " jenis yang paling banyak dipesan termurah";
j3[3] = " jenis paling banyak diminati";
j3[4] = " hari ini";
j3[5] = " terlaris";
j3[6] = " tahun ini termurah";
j3[7] = " model yang paling banyak dipesan dengan harga terbaik";
j3[8] = " saat ini paling murah";
j3[9] = " minggu ini";
j3[10] = " model favorit";

function gC(a){return a[Math.floor((Math.abs(new Date().getTime()-tgT)/96e6)%a.length)]}
var t1i=gC(t1),t2i=gC(t2),r3i=gC(r3),r4i=gC(r4),j1i=gC(j1), j2i=gC(j2),j3i=gC(j3);
