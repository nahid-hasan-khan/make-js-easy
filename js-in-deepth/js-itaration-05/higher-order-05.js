const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumbers.map((num) => {
  return num + 20;
});
console.log(newNums);

const caining = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 2)
  .filter((item) => item >= 50);
console.log(caining);
