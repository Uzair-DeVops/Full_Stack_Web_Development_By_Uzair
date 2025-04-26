

// hoisting


// console.log(AgeCalculator(2004))

// // declartion
// function AgeCalculator(BirthYear:number):number{
//     let age = 2025 - BirthYear
//     return age
// }

// function expression
let ageCalcultor = function (BirthYear:number):number{
    let age = 2025 - BirthYear
    return age
}

console.log(ageCalcultor(2004))
