let Calculator = function() {
  this.instructions = [
    {
      '*': (a, b) => a * b,
    },
    {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b
    },
  ]

  this.calculate = function(str) {
    let expression = str.split(' ');

    const selectPriorityInstruction = (i) => {

    }

    while(expression.length > 1) {
      expression.forEach((item, index, array) => {

        if( typeof +item !== Number ) {
          for( let i = 0; i < this.instructions.length; i++ ) { 
            console.log(expression, index, i)
            for( let key in this.instructions[i] ) {

              if(item === key) {
                let a = +array[index - 1];
                let b = +array[index + 1];

                array[index + 1] = this.instructions[i][key](a, b);
                array.splice(index, 1);
                array.splice(index - 1, 1);
                
              } else continue;
            } 
          }
        }
      })
    }
      console.log(expression)
  }
}

let SuperCalculator = new Calculator();

// console.log(SuperCalculator.calculate('2 + 2'));