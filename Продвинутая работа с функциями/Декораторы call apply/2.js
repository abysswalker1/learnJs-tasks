function f(x) {
  alert(x);
}

function delay(func, miliseconds) {
  return (...args) => setTimeout(() => func.apply(this, args), miliseconds);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test");
f1500("test"); 