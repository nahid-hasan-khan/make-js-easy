const coding = ["js", "py", "cpp", "rb"];
coding.forEach((item) => console.log(item));

coding.forEach(printMe);
function printMe(item) {
  console.log(item);
}

coding.forEach((item, index, array) => console.log(item, index, array));

const myCoding = [
  { langName: "JavaScript", langFile: "js" },
  { langName: "python", langFile: "py" },
  { langName: "C++", langFile: "cpp" },
];

myCoding.forEach((item)=>{
    console.log(item.langName);
    
})

const programming = ["js", "python", "cpp", "ruby","java",];

const values=programming.forEach((item)=>{ // forEach not return any value
    console.log(item);
});

console.log(values);
