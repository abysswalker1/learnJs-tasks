function truncate(str, pos) {
  if (str.length > pos) {
    return str.slice(0, ++pos) + '...';
  }  
  return str;
}


console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))
console.log(truncate("Всем привет!", 20));