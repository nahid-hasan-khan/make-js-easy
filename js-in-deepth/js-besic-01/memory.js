// stack memory use for premitive

let myChildName = "Abdullah";

let anotherChiled = myChildName;

console.log(anotherChiled);

anotherChiled = "Nahian";

// Heap memory use for non-premitive

let person = {
  name: "Nahid",
  age: 28,
  class: "CSE",
};

let person2 = person;
person2.age = 88;

console.log(person)
console.log(person2)
