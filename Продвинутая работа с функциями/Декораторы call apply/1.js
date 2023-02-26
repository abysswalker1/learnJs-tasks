function work(a, b) {
   return a + b ; // произвольная функция или метод
}

let spy = function(func) {
  let callIndex = 0;
  let inputCalls = new Map();

  function highOrder(...args) {
    inputCalls.set(callIndex, [...args]);
    callIndex++;

    alert(func.apply(this, args));
  }

  highOrder.calls = inputCalls; 

  return highOrder;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls.values()) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
