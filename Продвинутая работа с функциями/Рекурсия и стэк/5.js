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
function printListRecoursingReverse(list) {
  if(list.next) {
    alert(printListRecoursingReverse(list.next) )
    return list.value;
  } else {
    return list.value;
  }
}

alert(printListRecoursingReverse(list));


// Функция
function printReverseListCicleReverse(list) { 
  let arr = [];
  let context = list;

  while (context) {
    arr.push(context.value);
    context = context.next;
  }

  arr.reverse.forEach(item => alert(item));
}

printReverseListCicleReverse(list) 