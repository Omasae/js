var t1 = new Array ();
t1[0] = "Ongkos ";
t1[1] = "Beaya ";
t1[2] = "Update ongkos ";
t1[3] = "Harga ";
t1[4] = "Update Harga ";
t1[5] = "Harga Terbaru ";
t1[6] = "Harga Hari Ini ";
t1[7] = "Harga Terkini ";

var t2 = new Array ();
t2[0] = "layanan ";
t2[1] = "jasa ";
t2[2] = "mengenai ";
t2[3] = "dan ";
t2[4] = "& ";
t2[5] = "- ";
t2[6] = "";
t2[7] = "tentang ";

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
r4[2] = " perihal ";
r4[3] = " mengenai ";
r4[4] = " hal-hal yang berhubungan dengan ";
r4[5] = " sehubungan dengan ";
r4[6] = " dalam hal yang ada kaitannya dengan ";
r4[7] = " untuk ";
r4[8] = " yang ada hubungannya dengan ";
r4[9] = " bersangkutan dengan ";
r4[10] = " yang ada sangkutannya dengan ";
r4[11] = " info tambahan tentang ";
r4[12] = " artikel mengenai ";
r4[13] = " berita tentang ";
r4[14] = " informasi lebih dalam perihal atau tentang ";
r4[15] = " kabar dalam hal atau mengenai ";

var n1 = new Array ();
n1[0] = " model";
n1[1] = " gaya";
n1[2] = " konsep";
n1[3] = " trend";
n1[4] = " tren";
n1[5] = " style";
n1[6] = " desain";
n1[7] = " rupa";
n1[8] = " design";

var n2 = new Array ();
n2[0] = " terbaru";
n2[1] = " kekinian";
n2[2] = " masa kini";
n2[3] = " terkini";
n2[4] = " hari ini";
n2[5] = " abad ini";
n2[6] = " tahun ini";
n2[7] = " update kekinian";
n2[8] = " saat ini";
n2[9] = " yang lagi ngetrend";
n2[10] = " terlaris";
n2[11] = " paling banyak diminati";
n2[12] = " yang lagi digandrungi";
n2[13] = " yang sedang naik daun";
n2[14] = " yang paling banyak dipesan";
n2[15] = " mencerminkan kepribadian anda";

function gC(a){return a[Math.floor((Math.abs(new Date().getTime()-new Date(2023,12,16).getTime())/607e6)%a.length)]}
var t1i=gC(t1),t2i=gC(t2),r3i=gC(r3),r4i=gC(r4),n1i=gC(n1),n2i=gC(n2);
