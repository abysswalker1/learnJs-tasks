function getMaxSubSum(arr) {
  let accumulator = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    accumulator += arr[i]; 
    max = Math.max(max, accumulator); 

    if (accumulator < 0) {
      accumulator = 0;
    }
  }

  return max;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0