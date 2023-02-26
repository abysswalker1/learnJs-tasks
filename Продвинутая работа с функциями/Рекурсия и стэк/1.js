// Цикл, Арифм. прогрессия
function sumToCicle(n) {
  let sum = 0;
  for(let i = n; i > 0; i--) {
    sum += i;
  } 
  return sum;
}


// Рекурсия
function sumToRecoursing(n) {
  if(n == 0) {
    return n;
  } else {
    return n + sumToRecoursing(--n);
  }
}

alert(sumToCicle(10));
alert(sumToRecoursing(10));