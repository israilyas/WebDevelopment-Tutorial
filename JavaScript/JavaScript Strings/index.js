console.log("This is sting's tutorial")

let a = "ISRA"
console.log(a)
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
// console.log(a[4])

// length of array
console.log(a.length)

let my_name = "Harry"
let friend =  "Rohan"
console.log("His name is "+my_name+" And his friend name is.. "+friend)
// template literals syntax
console.log(`His name is ${my_name} and His friend name is ${friend}`)

// Escape sequense chaacters
// \n \t \r

// string Methods and properties
let b = "Shivam" 
console.log(b.toUpperCase())   // function
console.log(b.toLowerCase())  // function
console.log(b.length) //property

// SLicing of String
console.log(b.slice(0,3))   // 0 included and 3 is not     included
console.log(b.slice(0,5))   // 0 included and 5 is not     included
console.log(b.slice(2,6))   // 2 included and 6 is not     included
console.log(b.slice(1))   // 1 to last index character

// Replace 
console.log(b.replace("Sh" ,"77"))
let c = "ShivamSh" 
console.log(c.replace("Sh" ,"77"))   // when there is 2 occurence of that string or character  only 1st occurence is replaced

// Concatenate
let d = "432"
let e = "My Name is "
console.log(b.concat(d))
console.log(d.concat("ISRA"))
console.log(d.concat(e,"ISRA"))
console.log(d.concat(e,"ISRA", "ILYAS", "QURESHI"))

// Remove whitespaces
let new_str = " Isra Ilyas"
console.log(new_str)
console.log(new_str.trim())
console.log(new_str)  // String is imutable
console.log(a)  // String is imutable
console.log(b)  // String is imutable
console.log(c)  // String is imutable
console.log(d)  // String is imutable 

// more methods
console.log(b.charAt(0))
console.log(new_str.indexOf("y"))
console.log(new_str.indexOf("z"))

