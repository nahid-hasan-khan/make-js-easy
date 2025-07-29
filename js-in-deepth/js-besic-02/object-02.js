// singleton object

const tinderUser0 = new Object();

const tinderUser = {};
tinderUser.id = "758asd";
tinderUser.name = "Nahid";
tinderUser.isLoggedin = true;
tinderUser.email = "nahidkhan@google.com";

console.log(tinderUser);
console.log(typeof Object.keys(tinderUser)); // return a array of all keys
console.log(typeof Object.values(tinderUser)); // return a array of all values
console.log(typeof Object.entries(tinderUser)); //every key value will a single array
console.log(tinderUser.hasOwnProperty("roll")); //give a boolean value if this property exist or not

const regularUser = {
  fullName: {
    firstName: "faruk",
    lastName: "Hossain",
    nickName: {
      choice1: "Abul",
      choice2: "Babul",
    },
  },
  email: "faruk@gmail.com",
  id: 5426,
  isLoggedin: false,
};

console.log(regularUser.fullName?.nickName.choice1);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj6 = { ...obj1, ...obj2, ...obj4, ...obj3 };

console.log(obj3);
console.log(obj6);

const users = [
  { name: "Nahid", email: "nahid@gmail.com" },
  { name: "Nahid", email: "nahid@gmail.com" },
  { name: "Nahid", email: "nahid@gmail.com" },
  { name: "Nahid", email: "nahid@gmail.com" },
  { name: "Nahid", email: "nahid@gmail.com" },
];

console.log(users[2].email);
console.log(users.map(() => {}));

const course = {
  courseName: "JavaScript",
  price: "999",
  instructor: "Hitesh Sir",
};

const {instructor:sir} = course;

console.log(course.instructor);
console.log(sir);


// JSON intro

// {
//   "courseName": "JavaScript",
//   "price": "999",
//   "instructor": "Hitesh Sir" 
// }

[
  { name: "Nahid", email: "nahid@gmail.com" },
  { name: "Nahid", email: "nahid@gmail.com" },
  { name: "Nahid", email: "nahid@gmail.com" },
  { name: "Nahid", email: "nahid@gmail.com" },
  { name: "Nahid", email: "nahid@gmail.com" },
]