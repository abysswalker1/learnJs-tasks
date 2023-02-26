let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
  "dad": 1000,
};

function topSalary(obj) {
  let solarySort = Object.values(obj).sort((a, b) => +a > +b ? -1 : 1);
  let [ highest ] = solarySort;

  return highest;
}

alert(topSalary(salaries))