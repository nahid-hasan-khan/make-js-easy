const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const myTotal = numbers.reduce((acc, currval) => acc + currval, 0);

console.log(myTotal);

const shoppingCart = [
  { course: "JavaScript", price: 8999 },
  { course: "Python", price: 5999 },
  { course: "mobile app", price: 9999 },
  { course: "Data Science", price: 8999 },
];

const totalPrice = shoppingCart.reduce((acc, item) => item.price + acc, 0);
console.log(totalPrice);
