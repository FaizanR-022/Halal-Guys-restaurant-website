var button = document.getElementById("first_button");
var button_02 = document.getElementById("cta_button");

function button_click() {
  // Set the URL to redirect to
  window.open("https://wa.me/+923248209792", "_blank");
}

button.onclick = button_click;
button_02.onclick = button_click;
