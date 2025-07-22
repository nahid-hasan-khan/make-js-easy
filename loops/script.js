console.log("hello js loops")

let a= 1;
for( i =0; i<10; i++ ){
    console.log(a+i)
}

let obj = {
    name:"Nahid",
    age: 25,
    job: "Programming",
    company: "Khan Academy"
}
for (const key in obj) {
        const element = obj[key];

        console.log(element,key)
    }

    let name = "Nahid Hasan Khan"

    for (const element of name) {
        console.log(element)
    }