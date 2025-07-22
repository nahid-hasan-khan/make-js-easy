/*
write a program to calculate factorial of a number useing reduce and useing for loops
*/

// formula-1

const myArr = [1, 2, 3, 4, 5, 6, 7];

const factorial = (arr) => {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
};

const last = factorial(myArr);
console.log(last);

// formula- 2

const facto = (arr) => arr.reduce((acc, val) => acc * val, 1);
const final = facto(myArr)
console.log(final)