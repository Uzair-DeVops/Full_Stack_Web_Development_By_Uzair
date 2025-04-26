type User = {
    userName: string;
    age: number;
  };
  
const user: User = {
    userName: "Uzair",
    age: 24,
  };
  
let {userName:a , age:b} = user;
console.log(a,b);
