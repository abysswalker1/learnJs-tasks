function multiplyNumeric(object) {
  for(let key in object) {
    if( 
        object[key] > 0 || 
        object[key] < 0
      ) 
      object[key] *= 2;
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
