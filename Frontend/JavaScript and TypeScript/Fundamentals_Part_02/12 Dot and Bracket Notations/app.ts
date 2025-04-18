interface DETAILS{
  firstName : string,
  age : number,
  occupation:string,
  hobbies: string[]
}

const details : DETAILS = {
  firstName: "John",
  age: 30,
  occupation: "Software Engineer",
  hobbies: ["reading", "hiking", "coding"],


}
let firstName:string = details.firstName;
let age : number = details["age"];
let hobbies = details.hobbies;
console.log(firstName)
console.log(age)