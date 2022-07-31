let a = +prompt('Type first number');
let b = +prompt('Type second number');
let result = [];

if (typeof a !== 'number' || typeof b !== 'number') {
  alert('Invalid input data');
} else if (a >= b) {
  alert('Second number should be bigger');
} else {
  for (let i = a + 1; i < b; i++) {
    result.push(i);
  }
  alert(
    'First number: ' +
      a +
      '\n' +
      'Second number: ' +
      b +
      '\n' +
      'Numbers between: ' +
      result.join(' ')
  );
}
