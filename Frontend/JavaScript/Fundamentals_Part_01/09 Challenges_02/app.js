// Data 1
let MarkMass = 78 ;
let MarkHeight = 1.69 ;
let JohnMass = 92 ;
let JohnHeight = 1.95 ;

let MarkBMI = MarkMass / (MarkHeight * MarkHeight)
let JohnBMI =  JohnMass / (JohnHeight * JohnHeight)
console.log("BMI of Mark = " , MarkBMI)
console.log("BMI of John = " , JohnBMI)


if (MarkBMI > JohnBMI) {
    console.log(`MarkBMI ${MarkBMI} is higher then JohnBMI ${JohnBMI}`)
}else{
    console.log(`JohnBMI ${JohnBMI} is higher then MarkBMI ${MarkBMI}`)
}
