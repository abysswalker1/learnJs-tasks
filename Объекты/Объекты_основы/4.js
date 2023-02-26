let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}

Object.prototype.sum = function() {
  let result = 0; 
  for( let key in this ) {
    if( this[key] > 0 ) result += this[key];
  }
  return result;
}

console.log(salaries.sum());