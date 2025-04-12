// let i :number = 1
// while (i<= 10 ){
//   console.log(i)
//   i++
// }

let randomNumber : number = Math.floor(Math.random() * 6)+1

while(randomNumber !== 6){
  console.log(`you roll the dice and the number is ${randomNumber}`)
  randomNumber = Math.floor(Math.random() * 6)+1
}