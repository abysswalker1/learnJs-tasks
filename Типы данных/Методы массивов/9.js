let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

arr.sort((a, b) => {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) { 
    return -1;
  }
  return 0;
} )

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя