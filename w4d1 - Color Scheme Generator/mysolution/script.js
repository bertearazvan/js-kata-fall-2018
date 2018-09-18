"use strict";

let div1 = document.getElementById("color01");
let div2 = document.getElementById("color02");
let div3 = document.getElementById("color03");
let div4 = document.getElementById("color04");
let div5 = document.getElementById("color05");
console.log(div1.innerHTML);
function generateColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color = color + letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

console.log(generateColor());

function setRandomColor() {
  div1.style.backgroundColor = generateColor();
  div2.style.backgroundColor = generateColor();
  div3.style.backgroundColor = generateColor();
  div4.style.backgroundColor = generateColor();
  div5.style.backgroundColor = generateColor();

  document.getElementById("colorPrint1").innerHTML =
    "position: relative; <br> width: 100px; <br> height: 100px;<br>background-color: " +
    div1.style.backgroundColor +
    ";";
  document.getElementById("colorPrint2").innerHTML =
    "position: relative; <br> width: 100px; <br> height: 100px;<br>background-color: " +
    div2.style.backgroundColor +
    ";";
  document.getElementById("colorPrint3").innerHTML =
    "position: relative; <br> width: 100px; <br> height: 100px;<br>background-color: " +
    div3.style.backgroundColor +
    ";";
  document.getElementById("colorPrint4").innerHTML =
    "position: relative; <br> width: 100px; <br> height: 100px;<br>background-color: " +
    div4.style.backgroundColor +
    ";";
  document.getElementById("colorPrint5").innerHTML =
    "position: relative; <br> width: 100px; <br> height: 100px;<br>background-color: " +
    div5.style.backgroundColor +
    ";";
}

setRandomColor();
