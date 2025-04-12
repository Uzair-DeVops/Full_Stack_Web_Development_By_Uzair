var mixedArray = ["Uzair", 25, true, "ali"];
var newArray = [];
for (var i = mixedArray.length - 1; i >= 0; i--) {
    console.log("".concat(i, " : ").concat(mixedArray[i]));
}
// nested loops
for (var i = 0; i < 3; i++) {
    console.log("---------".concat(i, " work start-------- "));
    for (var j = 0; j < 3; j++) {
        console.log("hello from second loop ".concat(j, " "));
    }
}
