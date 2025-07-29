//singleton
Object.create;

//object literals
const mySym = Symbol("key1");

const objUser = {
  name: "Nahid",
  "full name": "Nahid hasan khan",
  age: 28,
  location: "Jessore",
  email: "nahid@google.com",
  isLoggedin: true,
  onDay: ["sat", "sun", "mon"],
  [mySym]:"myKey1"
};

objUser.email="nahidkhan@gmail.com"
Object.freeze(objUser)
objUser.email="nahidkhan@microsoft.com"
objUser.greeting = function(){
    console.log("Hello Js User");
}

objUser.greetingTwo = function(){
    console.log(`Hello js user ${this.name}`);
}

console.log(objUser.greeting());
console.log(objUser.greeting());


console.log(objUser.email);
console.log(objUser["email"]);

// console.log(objUser.full name);
console.log(objUser["full name"]);
console.log(typeof objUser.mySym);

