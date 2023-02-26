function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя"} );

f(); // Вася

f = f.bind( {name: "Петя"})

f() // Петя