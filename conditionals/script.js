console.log("hello js conditionals");

let age = 17;
let grace = 2;


if(age > 18){
    console.log("you are adult");
}
else{
    console.log("you are not adult");
};



console.log(age += grace)

if((age+grace) > 18){
    console.log("you are adult");
}
else{
    console.log("you are not adult");
};



// turnary operator

let a =5;
let b =40;

let c = a > b ? (a-b) : (a+b);
console.log(c)

/*
translate to:

if(a > b){
let c = a-b;
console.log(c)
}
else{
    let c = a+b;
console.log(c)
    }
*/