function throttle(func, delay) {
  let queue = true;
  let lastCall;
  return (...args) => {
    if (queue) {
      queue = false;
      func.apply(this, args);

      setTimeout(() => {
        queue = true;
        if (lastCall) lastCall();
      }, delay);
    } else {
      lastCall = () => func.apply(this, args);
    }
  }
}

function f(a) {
  console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано