const userEmail = "nahid@google,com";
if (userEmail) {
  console.log("got user email");
} else {
  console.log("not got email");
}

const userInfo = ""; // empty string a faulty value
if (userInfo) {
  console.log("got user email");
} else {
  console.log("not got email");
}

const userArr = []; // array is a true value
if (userArr.length == 0) {
  console.log("got user email");
} else {
  console.log("not got email");
}

const userObj = {}; // object is a true value
if (Object.keys(userObj).length == 0) {
  console.log("got user email");
} else {
  console.log("not got email");
}

//nullish coalescing operator (??):null, undefined

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = null ?? 10 ?? 50;
val1 = null ?? undefined ?? 50;
val1 = undefined ?? 10;
val1 = undefined ?? 10 ?? 20;
val1 = undefined ?? null ?? 20;

// Ternary Operator

condition ? true : false;

const teaPrice = 200;
teaPrice >= 500 ? console.log("buy the tea") : console.log("not enough money");

// faulty value :- false , 0 , -0 , bigint(0n), "empty string", null, undefined, NaN (and  everything is truthy value )
