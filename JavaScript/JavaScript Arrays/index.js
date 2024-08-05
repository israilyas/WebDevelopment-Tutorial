let arr = [1,2,3,4,5,9]
// index   0,1,2,3,4,5

// Aray in javascript is a collection of multiple datatypes
// array is mutable
// strings immutable
// console.log(arr)

// console.log(typeof(arr))
// arr[1] = 34
// console.log(arr.length) // length of array
// join arrat items with specified character or string
// // console.log(arr.join(" and "))
// console.log(`Pop-> remove last ${arr.pop()}`)  //remove last element//return updated length
// console.log(`Shift-> remove first element ${arr.shift()}`)
// console.log(`Shift-> add first element ${arr.unshift("jarry")}`)
// console.log(arr.push(100))
// console.log(arr)

//unshift and push-> brother
// pop and shift -> brother 

// convert array into string
// console.log(arr.toString())

// Delete last element
// delete arr[3]
// console.log(arr)
// the length of array will remain same
// memory is allocated but there is no value

// // CONCATENATE --> this method dont change existing array
// let a1 = [1, 2, 3]
// let a2 = [ 4,5,6,7,8]
// let a3 = [9,10,11,12,13]
// console.log(a1.concat(a2))
// console.log(a1.concat(a3))
// console.log(a1.concat(a2.a3))

// SORT FUNCTION
a4 = [1,9,3,6,2,8,5,7,4,6]
// console.log(a4.sort())
// it also takes optional compae argumentt

//Splice
// console.log(a4.splice(1,3))
// //add by splice on 1,3 index
// console.log(a4.splice(1,3,44,666))
// console.log(a4)

//slice
console.log(a4.slice(1,6))