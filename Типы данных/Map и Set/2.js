function aclean(arr) {

  let wordsMap = new Map(
    arr.map(str => {
      let value = str.toLowerCase().split('').sort().join('');
      return [str, value];
    }
  ).sort((a, b) => (a[1] > b[1]) ? 1 : -1));

  return new Set(wordsMap.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr))