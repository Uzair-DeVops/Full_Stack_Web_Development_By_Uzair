// console.log("uzair yasin");
var _a;
var resturant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};
// just testing
// const arr : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const [x,y,z]:number[] = arr
// console.log(x, y, z)
// display the array
var _b = resturant["categories"], first = _b[0], second = _b[1];
console.log(first, second);
// reasigning value
_a = [second, first], first = _a[0], second = _a[1];
console.log(first, second);
// function calling
var _c = resturant.order(2, 0), starter = _c[0], main = _c[1];
console.log(starter, main);
// nested array destructuring
var nested = [2, 4, [5, 6]];
var i = nested[0], j = nested[2];
console.log(i, j); // 2 [5, 6]
