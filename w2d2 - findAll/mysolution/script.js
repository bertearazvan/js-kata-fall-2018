const animals = [
  "dog",
  "cat",
  "horse",
  "cat",
  "mouse",
  "dog",
  "cat",
  "cat",
  "dog"
];

const animals2 = [];

function findAll(arr, object) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == object) {
      animals2.push(i);
    }
  }
  return animals2;
}

const catsAt = findAll(animals, "cat");
console.log(catsAt);
