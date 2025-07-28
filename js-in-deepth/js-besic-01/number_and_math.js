//Number

const score = 33.2544;

const balance = new Number(500);

console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(score.toPrecision(3));

const rate = 5000000;
console.log(rate.toLocaleString("en-IN"));
console.log(rate.MAX_VALUE);

// Math

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(8.8));
console.log(Math.min(8, 2, 5, 8, 4, 6, 9, 8, 7, 1));
console.log(Math.max(8, 2, 5, 8, 4, 6, 9, 8, 7, 1));
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)));
