// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*
SOLUTION 1: WITH REVERSE STRING

function reverse(str) {
  return str.split("").reverse().join("");
}
*/

/*
SOLUTION 2: WITH REVERSE STRING VIA FOR LOOP
function reverse(str) {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}
*/

function reverse(str) {
  return str.split("").reduce((reversed, character) => {
    return (reversed = character + reversed);
  }, "");
}

module.exports = reverse;
