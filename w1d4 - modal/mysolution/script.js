"use strict";

let details = document.querySelector("a");
let modal = document.getElementById("modal_container");

function showModal() {
  console.log("Show modal");
  modal.style.display = "flex";
  document.getElementById("products").style.filter = "blur(10px)";
}

let closeButton = document.getElementById("closebutton");

function hideModal() {
  console.log("Hide modal");
  modal.style.display = "none";
  document.getElementById("products").style.filter = "blur(0px)";
}
