if (true) {
  const a = 10;
  let b = 25;
  var c = 50;
}

console.log(a); // access in {block scop}
console.log(b); // access in {block scop}
console.log(c); // access in {global scop}

function one() {
  const userName = "Nahid";
  function two() {
    const website = "google";
    console.log(userName);
  }
  console.log(website);
  two();
}
one();

if (true) {
  const userName = "Nahid";
  if (userName === "Nahid") {
    const website = "Google";
    console.log(userName + website);
  }
  console.log(website);
}
console.log(userName);

// Interesting concept
addOne(15); // if call regular function before declare than it completely work   
function addOne(num) {
  return num + 1;
}

addTwo(25); // if call a function who hold a variable than that before declare than it not work
const addTwo = function (num) {
  return num + 2;
};
addTwo(25);
