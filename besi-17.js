var u = ["Apakah Anda ingin mengetahui berat <b>besi beton</b> ukuran 8 dengan standar SNI?<br />Berat <b>besi beton</b> dengan diameter 8 mm adalah sekitar 4,73 kg. Anda dapat mencari informasi ini dalam tabel berat besi beton. Atau, jika Anda ingin menghitungnya sendiri, gunakan rumus praktis: 8 (diameter dalam milimeter) x 8 (diameter dalam milimeter) x 12 (panjang dalam meter) x 0,006165 = 4,73472. Setelah pembulatan, beratnya sekitar 4,73 kg.",
" ",
" "];
var e = Math.floor((Math.abs(new Date().getTime() - new Date(2023, 7, 6).getTime()) / 82e6) % u.length);
document.write(u[e]);
