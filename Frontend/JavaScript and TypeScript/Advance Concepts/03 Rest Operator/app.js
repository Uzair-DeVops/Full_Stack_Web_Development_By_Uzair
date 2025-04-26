// rest operator 
// it will give error in ts 
function sum() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return rest;
}
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sum(5, 5, 9));
// rest in distrcuting 
// it will be always writtn in on left side of = sign
var firstElemet = myArray[0], others = myArray.slice(1);
console.log(firstElemet);
console.log(others);
