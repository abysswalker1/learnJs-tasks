let sum = function(arg) {
  let result = arg;

  let func = function doAgain(b) {
    result += b;
    return doAgain;
  }

  func.toString = function() {
    return result;
  }

  return func;
} 


alert(sum(2)(2)(-9));