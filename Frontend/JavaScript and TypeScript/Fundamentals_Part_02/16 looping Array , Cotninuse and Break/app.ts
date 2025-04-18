const mixedArray: (string | number | boolean)[] = ["Uzair", 25, true ,"ali"];
const newArray : string[] = [];
for (let i = 0; i < mixedArray.length; i++) {
  console.log(mixedArray[i]);
  if(typeof mixedArray[i] === 'string') break;
  newArray.push(typeof mixedArray[i]);
}



console.log(newArray)

