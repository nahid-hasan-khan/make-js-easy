"hello" + " world";

// string declaration
//if do this than it make a obj and key-pear value like 0:t,1:h ad give a length
const declaration = new string("this is % a string");
console.log(declaration[0])
console.log(declaration.__proto__)
console.log(declaration.length)
console.log(declaration.toUpperCase())
console.log(declaration.chartAt(2))
console.log(declaration.indexOf("a"))
console.log(declaration.slice(4,8))
console.log(declaration.trim())
console.log(declaration.replace("%","-"))
console.log(declaration.includes("is"))
console.log(declaration.split("-"))

const newStr=declaration.substring(0,4)
console.log(newStr);


// best practice
const name = "nahid";
const age = 28;
const clas = "CSE";
const myDetail = `My name is ${name} and my age ${age} and my class ${clas}`;
