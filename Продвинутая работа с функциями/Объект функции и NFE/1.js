function makeCounter() {
  let count = 0;

  let counter = function() {
    return count++;
  };

  counter.set = function(value) {
    count = value
    return count;
  }
  counter.decrease = function() {
    return --count;
  }

  return counter;
}

let doCounter = makeCounter();

alert(doCounter());
alert(doCounter.set(100));
alert(doCounter());
alert(doCounter());
alert(doCounter.decrease());
alert(doCounter.decrease());



