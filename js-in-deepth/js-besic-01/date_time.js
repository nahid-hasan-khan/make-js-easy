//Dates

let myDate = new Date();
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());

let myCreatedDate = new Date(2023, 0, 23);
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
let myCreatedDate3 = new Date("2023-03-20");
let myCreatedDate4 = new Date("02-24-2023");
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate2.toLocaleString());
console.log(myCreatedDate3.toLocaleString());
console.log(myCreatedDate4.toLocaleString());

// Time

let myTimeStamp = new Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(myCreatedDate.getTime());
console.log(Date.now() / 1000);
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();

console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMonth() + 1);
console.log(newDate.getSeconds());
console.log(newDate.getMinutes());
console.log(newDate.getMilliseconds());
console.log(newDate.getTime);

newDate.toLocaleString("default",{
    weekday:"long",
    timeZone:"UTC+06:00"
})