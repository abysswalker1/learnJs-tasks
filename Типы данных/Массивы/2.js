let styles = ['Джаз', 'Блюз'];
console.log(styles);

styles.push('Рок-н-ролл');
console.log(styles);

Array.prototype.putInMiddle = function(newItem) {
  let newArray = [];
  let middle = (this.length % 2 === 0) ? this.length / 2 : --this.length / 2;
  for( let i = 0; i < this.length; i++ ) {
    if( i === middle ) {
      newArray.push(newItem);
    }
      newArray.push(this[i]);
  }
  return newArray;
}

styles = styles.putInMiddle('Классика');
console.log(styles);

styles.shift(0);
console.log(styles);

styles.push('Рэп');
styles.push('Регги');
console.log(styles);