describe('pow', function () {
  let x = 5;

  function multiplyItSelf(n, result) {
    assert.equal(pow(x, n), result);
  }

  it(
    "Возводит 5 в степень 1", 
    () => multiplyItSelf(1, 5)
  );
  it(
    "Возводит 5 в степень 2", 
    () => multiplyItSelf(2, 25)
  );
  it(
    "Возводит 5 в степень 3", 
    () => multiplyItSelf(3, 125)
  );
  it(
    "Возводит 5 в степень 4", 
    () => multiplyItSelf(4, 625)
  );
});