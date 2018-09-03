function concat(a, b) {
  if (b < 10) {
    c = a.replace("#", "0" + b);
    return c;
  } else {
    c = a.replace("#", b);
    return c;
  }
}

console.log(concat("imagine#.img", 4));
console.log(concat("imagine#.img", 15));
console.log(concat("imagine#.img", 1523));
console.log(concat("#imagine.img", 15));
