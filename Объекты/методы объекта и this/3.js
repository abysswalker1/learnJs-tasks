let ladder = {
  step: 0,
  up() {
    this.step++;
    console.log(this.step);
    return this;
  },
  down() {
    this.step--;
    console.log(this.step);
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this;
  }
};

ladder
.up()
.up()
.down()
.showStep()
.down()
.showStep()
.up()
.up()
.down()
.showStep()
.down()
.showStep()
.down()
.down()
.down()
.down()
.down()
.down()
.down()
.down().down()
.down().down().down()
.down().down().down().showStep();