let array = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  arr.forEach((item, index, arr) =>  {
    if( !(item === a || item === b) ) {
      arr.splice(index, 1);
    } 
  });
}

filterRange(array, 1, 4);

console.log(array);