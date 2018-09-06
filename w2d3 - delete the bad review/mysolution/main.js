"user strict";

let arr = [];

const minRev = 5;

function init() {
  arr = document.querySelectorAll("ul li");
  removeTheRev();
}

function removeTheRev() {
  arr.forEach(li => {
    const rev = li.textContent.substring(0, 1);
    if (rev < minRev) {
      li.remove();
    }
  });
}

init();
