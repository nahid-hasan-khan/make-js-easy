const myObject = {
  js: "JavaScript",
  py: "Python",
  cpp: "C++",
  rb: "rubi",
};

for (const key in myObject) {
  console.log(`${key} for shorts is ${myObject[key]}`);
}

const myArr = ["js", "py", "cpp", "rb"];
for (const key in object) {
  console.log(key);
}

const map = new Map();
map.set("IN", "india");
map.set("USA", "United State of America");
map.set("BD", "Bangladesh");
map.set("UAE", "United State of Arab Emarats");
map.set("Fr", "France");
map.set("BD", "Bangladesh");

for (const key in map) { //map is not itrable
    console.log(key);
    
    }
