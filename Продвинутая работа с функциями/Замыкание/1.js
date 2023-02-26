function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();  // 1 лексическое окружение; counter = 0
let counter2 = makeCounter(); // 2 лексическое окружение; counter = 0

alert( counter() ); //  1-e лексическое окружение; counter++ = 0;
alert( counter() ); //  1-e лексическое окружение; counter++ = 1;

alert( counter2() );  // 2-e лексическое окружение; counter++ = 0; 
alert( counter2() );  // 2-e лексическое окружение; counter++ = 1;  