function formatDate(date) {
  let now = new Date();
  let difference = now - date;

  if( difference > 1 && difference < 60000 ) {
      return `${difference / 1000} сек. назад`; 

  } else if
    ( difference > 60000 && difference < 60 * 60000) {
      let minutes = difference / 60000; 
      return `${minutes} мин. назад`;

  } else if
    ( difference > 60 * 60000 ) {
        let format = (date) => (date < 10) ? '0'+ date : date;

        let day = format(date.getDate()), 
        month = format(date.getMonth()), 
        year = format(date.getFullYear().toString().slice(2)),
        minutes = format(date.getMinutes()),
        seconds = format(date.getSeconds())   

        return `${day}.${month}.${year} ${minutes}:${seconds}`;

  } else {
    return 'прямо сейчас';
  }
}


alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );