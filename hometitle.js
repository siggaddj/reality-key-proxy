var i = 0;
var txt = "My Drive - Google Drive"

var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.addEventListener('load', typeWriter)