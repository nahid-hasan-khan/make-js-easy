const marvelHeros = ["Thor", "Iron Man", "Black Panther", "Spider Man"];
const dcHeros = ["Flash", "super man", "bat man"];

marvelHeros.push(dcHeros);

console.log(marvelHeros);
console.log(marvelHeros[3][1]);

const all = marvelHeros.concat(dcHeros);

const allNewHeros = [...marvelHeros, ...dcHeros];

console.log(all);
console.log(allNewHeros);

const anotherArr = [1, 2, 3, [4, 5, 6, 7], 8, 9, [6, 7, 8, 5], [4, 5, 2, 1, 5]];

const realAnotherArr = anotherArr.flat(Infinity);
console.log(realAnotherArr);

console.log(Array.isArray("Nahid"));
console.log(Array.from("Nahid"));
console.log(Array.from({ name: "Nahid" })); //its give e,pty array [] becouse just make a array by keys or values

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
