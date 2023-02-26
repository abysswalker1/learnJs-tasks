function camelize(str) {
  let arrayFromStr = str.split('');
  let indexOfLine = arrayFromStr.indexOf('-');
  
  while(indexOfLine !== -1) {
    arrayFromStr.splice(indexOfLine, 1);
    arrayFromStr[indexOfLine] = arrayFromStr[indexOfLine].toUpperCase();
    indexOfLine = arrayFromStr.indexOf('-')
  }

  return arrayFromStr.join('');
}

console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))