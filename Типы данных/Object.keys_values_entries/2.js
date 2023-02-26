let user = {
  name: 'John',
  age: 30,
  status: 'OK'
};

function count() {
  let sum = 0;

  for( let entrie of Object.entries(user) ) {
    sum++
  }
  return sum;
}

alert( count(user) );