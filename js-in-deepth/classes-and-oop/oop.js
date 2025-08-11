// object literal (literally a object)

const user = {
  name: "Nahid",
  age: 28,
  birth: "12th Dec 1997",
  loginStatus: function () {
    console.log("Got user details from Database");
    console.log(this.name);
    console.log(this);
  },
};
console.log(user.birth);
console.log(this.user.age);
console.log(user.loginStatus());

//constructor function
const promiseOne = new promise(); //new keyword is constructor function
const myDate = new Date(); // its allow to make a deferent object case by a fixed code

function User(userName, loginStatus, age) {
  this.userName = userName;
  this.loginStatus = loginStatus;
  this.age = age;
//   return this;
}
const userOne =new User("Nahid", 12, 28);
const userTwo =new User("Karim", 50, 40);
console.log(userOne.constructor); //ref of self
console.log(userTwo);
