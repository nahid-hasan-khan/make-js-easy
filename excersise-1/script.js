/*
create a faulty calculator


this faulty calculator does following:- 
1.it takes two numbers as input from user
2. it perfoms wrong operations as follows 
+ --- - 
* --- +
- --- / 
/ --- **


3. it perfoms wrong operation 10% of the time 

*/

let random = Math.random();

let a = prompt("Enter First Number")
let b = prompt("Enter operation")
let c = prompt("Enter Second Number")


let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}


if (random > 0.1) {
    alert(`the result is ${eval(` ${a} ${b} ${c}`)}`)

}
else{
c = obj[c]
}
