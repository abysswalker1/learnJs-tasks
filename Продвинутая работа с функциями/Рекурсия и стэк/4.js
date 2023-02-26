let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: null
        }
      }
    }
  }
};

// Рекурсия
function printListRecoursing(list) {
  return (list.next)
    ? list.value + printListRecoursing(list.next)
    : list.value
}

// Цикл
function printListCicle(list) {
  let context = list;
  let sum = 0;

  while(context.next) {
    sum += context.value
    context = context.next
  }
  return sum += context.value;
   
}

alert(printListRecoursing(list));
alert(printListCicle(list));
