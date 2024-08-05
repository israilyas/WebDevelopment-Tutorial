console.log("This is JAVASCIPT Variable Tutorial")
// var is global variable we can also  modify it
var a = 7;
var b = 10;
var c='name';
// var 78name = "Rohan" not allowed

console.log(a+b)
console.log(typeof a , typeof b , typeof c)

let _a = 10;
// LET  we use only for specific block of code like if else
const __a = 89;
// we can not modify const variable

{
    let a = 33
    console.log(a)
}
console.log(a)

//Premetive data types?]
let x= 22;
let y=22.5;
let z="hello";
const p = true;
let q = undefined;
let r = null;

console.log(x , y , z , p , q , r)
console.log(typeof x , typeof y , typeof z , typeof p , typeof q , typeof r)

// OBJECT (datatype)->> combinition of key value pairs

let o = {
    name:"ISRA",
    "job role":"Web-Developer",
    is_Beautiful:true
}
console.log(o)
o.salary = "100core"
console.log(o)
o.salary = "5600core"
console.log(o)

