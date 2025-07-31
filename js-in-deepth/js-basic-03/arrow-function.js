//if use {} in arrow function than must be use return keyword

//type 1. with parameter and multiline complex operation than return
const addOne = (num1, num2) => {
  return num1 + num2 + 1;
};

console.log(addOne(10, 20));

//type 2. with parameter and simple operation one line return
const addTwo = (num1, num2) => num1 + num2 + 2;
console.log(addTwo(10, 20));

//type 3. with no parameter and simple operation one line return
const addThree = () => console.log(num1 + num2 + 3);
console.log(addThree());

//type 4. when you return a obj in one line
const returnObj = () => ({ name: "Nahid" });
console.log(addThree());

const myArr = [10, 20, 30, 40, 50];
// myArr.forEach(()=>{
// });
// myArr.forEach(()=>()) ;
