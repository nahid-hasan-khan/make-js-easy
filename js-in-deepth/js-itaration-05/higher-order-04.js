const programming = ["js", "python", "cpp", "ruby", "java"];
const values = programming.forEach((item) => {
  // forEach not return any value if we face the situation than what can we do?? then we use filter
  console.log(item);
});

console.log(values);

const myNumbers = [10, 20, 30, 40, 50, 60, 70];
const under50 = myNumbers.filter((number) => {
  return number > 50;
});
console.log(under50);

//if use forEach and work same to filter.
const myNums = [];

myNums.forEach((num) => {
  if (num > 4) {
    myNums.push(num);
  }
});

console.log(myNums);

const books = [
    {}
];
