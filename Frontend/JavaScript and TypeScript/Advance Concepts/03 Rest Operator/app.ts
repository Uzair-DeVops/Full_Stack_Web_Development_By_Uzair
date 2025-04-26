// rest operator 
// it will be always at the end

// it will give error in ts 
function sum(...rest:number[]){
    return rest
}

let myArray :number[]= [1,2,3,4,5,6,7,8,9]

console.log(sum(5,5,9))


// rest in distrcuting 
// it will be always writtn in on left side of = sign

let [firstElemet , ...others] = myArray
console.log(firstElemet)
console.log(others)
