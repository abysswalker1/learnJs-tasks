function getWeekDay(date) {
  let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

  return days[date.getDay()];
}

let date = new Date(2014, 0, 3); 
alert( getWeekDay(date) ); 