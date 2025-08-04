//for of

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const element of arr) {
  console.log(element);
}

const greetings = "my name is Nahid Hasan Khan";

for (const greet of greetings) {
  console.log(greet);
}

//maps
// map remamber order and denied duplicate
const map = new Map();
map.set("IN", "india");
map.set("USA", "United State of America");
map.set("BD", "Bangladesh");
map.set("UAE", "United State of Arab Emarats");
map.set("Fr", "France");
map.set("BD", "Bangladesh");

console.log(map);

for (const [key, value] of map) {
  // we can use loop in the map and map give a full key value in an array
  console.log(key, ":-", value);
}

const myObj = {
  game1: "NFS",
  game2: "FF",
  game3: "PUBG",
  game4: "COD",
};

// for (const key in myObj) {
//   console.log(key);
  
// }