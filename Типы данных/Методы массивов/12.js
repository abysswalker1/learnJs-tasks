function unique(arr) {
  let result = [];
  arr.forEach( item => {
    if (!result.includes(item)) {
      result.push(item);
    }
  })

  return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O