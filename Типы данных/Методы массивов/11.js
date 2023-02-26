let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let users = [ vasya, petya, masha ];

function getAverageAge(array) {
  let sum = array.reduce((prev, current) => {
    return {age: prev.age + current.age}
  }).age;

  console.log(sum, array.length)
  return sum / array.length;
}

alert( getAverageAge(users) );