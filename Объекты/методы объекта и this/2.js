let calculator = {
  read(...numbers) {
    numbers.forEach(number => this[number] = number)
  },
  isNumber(value) {
    if(
        value > 0 ||
        value < 0
      ) return true;
  },
  sum() {
    let result = 0;
    for( let key in this ) {
      if( this.isNumber(this[key]) ) {
        result += this[key];
      }
    }
    return result;
  },
  mul() {
    let result = 1;
    for( let key in this ) {
      if( this.isNumber(this[key]) ) {
        result *= this[key];
      }
    }
    return result;
  }
};

calculator.read(1, 2, 10, 56);
console.log(calculator)
alert( calculator.sum() );
alert( calculator.mul() );