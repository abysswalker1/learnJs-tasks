function random(min, max) {
  let floatPart = Math.random() * min;
  let intPart =  (floatPart * (max - min + 1)).toFixed(1);

  return intPart + floatPart;
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );