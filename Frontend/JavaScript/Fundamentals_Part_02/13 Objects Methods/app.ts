interface DETAILS{
  firstName : string,
  age : number,
  occupation:string,
  hobbies: string[],
  birthYear(): number; 
  Adult():boolean;
}

const details : DETAILS = {
  firstName: "John",
  age: 23,
  occupation: "Software Engineer",
  hobbies: ["reading", "hiking", "coding"],
  birthYear : function(this) {
    return 2025 - this.age;
  },
  Adult: function (this) {
    return this.age>18
  }

}

console.log(details.birthYear())
console.log(details.Adult())