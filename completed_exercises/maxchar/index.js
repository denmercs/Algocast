// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   const charObj = {};
//   let max = 0;
//   let charMax = "";

//   for (let char of str) {
//     if (!charObj[char]) {
//       charObj[char] = 1;
//     } else {
//       charObj[char]++;
//     }
//   }

//   // easier
//   // return (chars[char] = chars[char] + 1 || 1);

//   for (let char in charObj) {
//     if (charObj[char] > max) {
//       max = charObj[char];
//       charMax = char;
//     }
//   }

//   return charMax;
// }

function maxChar(str) {
  let objChar = {};
  let max = 0;
  let charMax = "";

  let arr = str.split("");

  for (let char of str) {
    if (!objChar[char]) {
      objChar[char] = 1;
    } else {
      objChar[char]++;
    }
  }

  for (let char in objChar) {
    if (objChar[char] > max) {
      max = objChar[char];
      charMax = char;
    }
  }

  return charMax;
}

module.exports = maxChar;
