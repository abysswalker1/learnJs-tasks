let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(arr) {
  let object = {};

  arr.forEach(item => object[item.id] = item);
  return object;
}

let usersById = groupById(users);

console.log(usersById);