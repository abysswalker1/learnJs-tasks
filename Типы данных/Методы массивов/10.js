let array = [1, 2, 3];

function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5); 
}

shuffle(array);
console.log(array);

shuffle(array);
console.log(array);

shuffle(array);
console.log(array);

