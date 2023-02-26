let printNumberInterval = function(from, to) {
  let step = from;

  let interval = setInterval(function() {
    console.log(step, to);

    if( from > to ) {
      if( step === to ) {
        clearInterval(interval);
      }
      step = step - 1;
    } 
    else if( from < to ) {
     if( step === to ) {
        clearInterval(interval);
      }
      step = step + 1;
    } 
  }, 1000);
}

let printNumberTimeout = (from, to) => {
  console.log(from)
  if( from < to ) {
    if(from === to ) {
      clearInterval();
    }
    return setTimeout(() => printNumberTimeout(from + 1, to), 1000);

  } else if ( from > to ) {
    if(from === to ) {
      clearInterval();
    }
    return setTimeout(() => printNumberTimeout(from - 1, to), 1000)
  }
}