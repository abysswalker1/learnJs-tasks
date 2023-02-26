function randomInt(min, max) {
  let randomFloat = Math.random() 
  let intPart =  (max - 1) - (min + 1);

  return Math.round(intPart * (0.7 + randomFloat));
}

alert( randomInt(1, 6) );
alert( randomInt(1, 6) );
alert( randomInt(1, 6) ); 