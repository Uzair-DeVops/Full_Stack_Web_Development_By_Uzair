
const mixedArray: (string | number | boolean)[] = ["Uzair", 25, true ,"ali"];
const newArray : string[] = [];
for (let i:number = mixedArray.length - 1 ; i >= 0; i--) {
  console.log(`${i} : ${mixedArray[i]}`);
}

// nested loops
for(let i :number = 0 ; i < 3 ; i++) {
  console.log(`---------${i} work start-------- `)
  for (let j : number = 0 ; j < 3 ; j++) {
    console.log(`hello from second loop ${j} `);
}}
