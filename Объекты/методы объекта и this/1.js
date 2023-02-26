function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Ошибка

// в this передается ссылка на контекст makeUser. 
// В объекте, который она создаст ref будет иметь значение undefined.