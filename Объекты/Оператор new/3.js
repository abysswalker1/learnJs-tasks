function Accumulator(initialValue) {
  this.value = initialValue;
  this.read = () => this.value += +prompt('Добавьте занчение');
}


let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); 
accumulator.read(); 
accumulator.read(); 
accumulator.read(); 

alert(accumulator.value);