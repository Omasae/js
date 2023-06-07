document.getElementById("rea").innerHTML = "<button id='s' title='play : baca tulisan di halaman ini'> 🔊 </button> <button id='p' style='display: none;' title='pause / jeda'> ⏸ </button> <button id='r' style='display: none;' title='resume / lanjut'> ▶️ </button> <button id='t' style='display: none;' title='stop / berhenti'> ⏹ </button> <style>button {padding: 20px; font-size: 150%; border: none; background: none; cursor: pointer;}</style>";
var sb = document.getElementById('s');
var pb = document.getElementById('t');
var eb = document.getElementById('p');
var rb = document.getElementById('r');
sb.addEventListener('click', function() {
  var text = document.getElementsByClassName("post-title")[0].innerText + ". " + document.getElementsByClassName("post-body")[0].innerText;
  var utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'id-ID';
  speechSynthesis.speak(utterance);
  sb.style.display = 'none';
  eb.style.display = 'inline-block';
  pb.style.display = 'inline-block';
});
eb.addEventListener('click', function() {
  if (speechSynthesis.speaking) {
speechSynthesis.pause();
eb.style.display = 'none';
rb.style.display = 'inline-block';
  }
});
rb.addEventListener('click', function() {
  speechSynthesis.resume();
  rb.style.display = 'none';
  eb.style.display = 'inline-block';
});
pb.addEventListener('click', function() {
  speechSynthesis.cancel();
  rb.style.display = 'none';
  eb.style.display = 'none';
  pb.style.display = 'none';
  sb.style.display = 'inline-block';
});
