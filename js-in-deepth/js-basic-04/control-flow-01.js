// if statement

const userLoggedIn = true;

// if statement true than execute if statement false then not execute code
if (userLoggedIn) {
  console.log("executed");
}

if (2 === "2") {
  console.log("false");
}

const temp = 40;
if (temp < 50) {
  console.log("temp less 50");
} else {
  console.log("temp up to 50");
}

const score = 200;
if (score > 100) {
  const power = "fly";
  console.log(`user power ${power}`);
} else {
  console.log(`user power ${power}`);
}

const balance = 1000;

if (balance > 500) console.log("test"), console.log("test2");

//multiple conditions

if (balance < 500) {
  console.log("not enough");
} else if (balance < 800) {
  console.log("not enough for food");
} else if (balance < 900) {
  console.log("not enough for t-shirt");
} else {
  console.log("enough for t-shirt");
}

const isLoggedIn = true;
const loggedInGoogle = true;
const loggedInEmail = true;
const debtCard = true;

if (isLoggedIn && debtCard && 5 === 5 && loggedInGoogle ||loggedInEmail) {
  console.log("you can buy this product");
}
