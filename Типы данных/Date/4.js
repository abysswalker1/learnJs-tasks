let date = new Date(2015, 0, 2);

function getDateAgo(date, days) {
  date.setDate(date.getDate() - days);
  return date.getDate();
}


alert( getDateAgo(date, 1) );
alert( getDateAgo(date, 2) );
alert( getDateAgo(date, 365) );