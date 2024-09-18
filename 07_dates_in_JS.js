
// date start from January 01 1970 in java script..

let myDate = new Date()

console.log(myDate.toDateString());

console.log(myDate.toString());

console.log(myDate.toISOString());

console.log(myDate.toJSON());

console.log(myDate.toLocaleDateString());

console.log(myDate.toLocaleTimeString());

console.log(myDate.toTimeString());

// Q1: what is the typeof of date
//Ans: Date is a Object.

console.log(typeof myDate);

let MyName = "Himank"
console.log(typeof MyName);

let MyScore = 500
console.log(typeof MyScore);

let CarBrands = ["BMW", "Volvo", "TATA"]
 console.log(typeof CarBrands);
 console.log(CarBrands);
 
 // Month always start from 0 in js (eg. 0 = January, 1 = Feb) only when we take single value

 //let myCreatedDate = new Date(2018, 11, 11)

 //let myCreatedDate = new Date(2018, 11, 10, 10, 30)

 //console.log(myCreatedDate.toDateString());

 //console.log(myCreatedDate.toLocaleString());

 let myCreatedDate = new Date("01-13-2024");

 //console.log(myCreatedDate.toLocaleString());

 //let myTimeStamp = Date.now()
//console.log(myTimeStamp);


let newDate =   new Date()
console.log(newDate);

console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());





 
