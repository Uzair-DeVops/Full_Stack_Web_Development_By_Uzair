// console.log("uzair yasin");

// let resturant: ( string | number | boolean | number[] )[] = [
//     "uzair",
//     20,
//     true,
//     "yasin",
//     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

// ]

// practice 1

type Restaurant = {
    name: string;
    location: string;
    categories: string[];
    starterMenu: string[];
    mainMenu: string[];
    order: (starterIndex: number, mainIndex: number) => string[];
  };
  
const resturant : Restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    order : function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
} 



// just testing
// const arr : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const [x,y,z]:number[] = arr
// console.log(x, y, z)


// display the array

let [first,second] = resturant["categories"];
console.log(first, second);

// reasigning value

[first, second] = [second, first];
console.log(first, second);


// function calling
const [starter, main] = resturant.order(2, 0);
console.log(starter, main); 

// nested array destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); // 2 [5, 6]


// default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1