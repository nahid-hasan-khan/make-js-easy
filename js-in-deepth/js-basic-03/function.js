function sayMyName() {
  console.log("N");
  console.log("A");
  console.log("H");
  console.log("I");
  console.log("D");
}
sayMyName();

function addTwoNumber(num1, num2) {
  console.log(num1 + num2);
}
const result = addTwoNumber(10, 50);
console.log(result); //result undefined if you not return anything

function addTwoNumber2(num1, num2) {
  const result = num1 + num2;
  return result;
}
const result2 = addTwoNumber2(10, 50);
console.log(result2);

function loginMsg(userName = "Hossain") {
  if (!userName === undefined) {
    console.log("please insert a userName");
  } else {
    return `login user is ${userName} thanks for login mr.${userName}`;
  }
}

const user = "Nahid Khan";
const result3 = loginMsg(user);
console.log(result3);

function calculatePrice(price1, price2, ...price) {
  return price;
}
console.log(calculatePrice(100, 200, 800, 500));

const user1 = {
  name: "Nahid",
  course: "js",
  prices: 199,
};

function handleObject(anyObject) {
  console.log(
    `User Name is ${anyObject.name} , user Course ${anyObject.course} and course price ${anyObject.price}`
  );
}

// handleObject(user1)
handleObject({
  name: "Nahid",
  course: "JavaScript",
  prices: 299,
});

const listOfFriends = ["Babu", "Shuvo", "Santo", "Mamun"];

function handleArraysSecond(anyArr) {
  return `my friends is ${anyArr} and second number is ${anyArr[1]}`;
}

// handleArraysSecond(listOfFriends);
handleArraysSecond([10, 20, 30, 40, 50, 60]);
