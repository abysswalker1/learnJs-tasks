function extractCurrencyValue(str) {
  let result = '';

  for(i = 0; i < str.length; i++) {
    if(str[i] > 0 || str[i] <= 0) {
      result += str[i]
    }
  }
  return +result || 0;
}

console.log(extractCurrencyValue('$120'));
console.log(extractCurrencyValue('38 попугаев'));
console.log(extractCurrencyValue('медведь'));