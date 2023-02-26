function Calculator() {
  this.read = () => {
    this.a = +prompt('Введите первое число'),
    this.b = +prompt('Теперь второе')
  }
  this.sum = () => {
    return this.a + this.b;
  }
  this.mul = () => {
    return this.a * this.b;
  }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );