// let names :string[] = ["uzair" , "ali" , "ahmed"]
// console.log(names.find)

// // multiideimensional  , modfiy , del
// // pop push shit unshit slice splice  sort reverse concat join isarray indexof lastindexof includes filter foreach loop 




// console.log(arr[0])

// // modifying the array
// arr[0] = "usman"
// console.log(arr)

// // delelte
// delete arr[2]
// console.log(arr)

// array methods

const arr1: (number | string | boolean)[] = ["a",1,2,3,4,5,"A","b",true,false]
// pop
// arr1.pop()
// console.log(arr1)
// // push
// arr1.push("usman")
// console.log(arr1)
// // shift
// arr1.shift()
// console.log(arr1)
// // unshift
// arr1.unshift("usman")
// console.log(arr1)
// // slice
// console.log(arr1)
// console.log(arr1.slice(0,3))
// console.log("---------------")
// // // splice
// console.log(arr1)
// console.log(arr1.splice(4,0,"usman","ahmed","ali"))
// console.log(arr1)

// // sort
// console.log(arr1.sort())
// // reverse
// console.log(arr1.reverse())
// let arr : string[] = ["uzair" , "ali" , "ahmed"]

// // concat
// console.log(arr1.concat(arr))
// // join
// console.log(arr1.join("--"))
// isarray
// console.log(Array.isArray(arr1))
// indexof
let arr3 :number[] = [1,2,3,4,5,6,7,3,8,9]
// console.log(arr1)
// console.log(arr3.indexOf(3,3))
// lastindexof
// console.log(arr3.lastIndexOf(3))
// // includes
// console.log(arr1.includes(10))
// // filter
console.log(arr3.filter((item:number) => item < 5))

// // foreach
// arr3.forEach((item) => console.log(item))
// // loop

// for(let i = 0 ; i < arr3.length ; i++){
//     console.log(arr3[i])
// }