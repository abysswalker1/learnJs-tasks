function someInput() {
  let result = 0;
  let arr= [
    +prompt('Введите число','')
  ];

  while( arr[arr.length - 1] > 0 ) {
    arr.push(+prompt('Введите число',''))
  } 

  for( let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  alert(result);
}

someInput();