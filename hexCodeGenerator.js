var body, id;

function changeBg() {
  body = document.getElementsByTagName("body")[0];

  var hexcolor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

  var hex = "#";

  var id = setInterval(generateHexCode, 2000);

  function generateHexCode() {
    var rand;
    for (var i = 0; i < 6; i++) {
      rand = Math.floor(Math.random() * hexcolor.length);
      hex += hexcolor[rand];
    }
    changeColor(hex);
    displayHexCode(hex);
    hex = "#";
  }

  function changeColor() {
    body.style.backgroundColor = hex;
  }

  function displayHexCode() {
    document.querySelector(".hex").textContent = hex;
  }
}
