const user = {
  name: "Ahmed",
  roll: "Student",
  id: 115,
  welcomeMessage: function () {
    console.log(`${this.name}, Welcome to our website`);
    console.log(this); // this method print current context if that will change
  },
};

user.welcomeMessage();
user.name = "Sam";
user.welcomeMessage();

console.log(this); //if you in node than this ref {empty scop} but when you in this a browser than  ref window

// arrow function
function cai() {
  const userName = "Nahid";
  console.log(this.userName); //its a wrong way to use this in a function,you can not use this
}

cai();

const cay = function () {
  const userName = "Nahid";
  console.log(this.userName); //its a wrong way to use this in a function,you can not use this
};

cay()

const cay2 = () => {
  const userName = "Nahid";
  console.log(this.userName); //if you in this type arrow function than (this) ref {empty scop}
};

cay2()
