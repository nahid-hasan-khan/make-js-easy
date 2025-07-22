function nice (name){
    console.log("hey " + name + " you are nice")
}

nice("Nahid")
nice("Boss")


function sum (a,b){
    const result = a+b;
    console.log("this numbers sum is ",result)
}

sum(20,50)


function sum2 (a,b = 4){
    const result = a+b;
    return result
}

const eq = sum2(10)
console.log(eq)


const func1 =(x)=>{
    console.log("this is arrow function",x)
}