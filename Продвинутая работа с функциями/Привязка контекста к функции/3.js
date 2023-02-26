function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

alert( bound.test ); // undefiend, у нового контекста {name: 'Вася'} нет свойства test  