function ucFirst(string) {
  let firstLetter = string[0].toUpperCase();
  
  return firstLetter + string.slice(1);
}

alert(ucFirst('вася'));