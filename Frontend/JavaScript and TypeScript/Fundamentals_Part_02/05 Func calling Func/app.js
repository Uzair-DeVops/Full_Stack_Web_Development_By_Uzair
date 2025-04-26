"use strict";
let pieces = (apple) => {
    return apple * 2;
};
let juices = (apple) => {
    let Piece = pieces(apple);
    console.log(`Your apple juice contain ${Piece} pieces apples`);
};
juices(5);
// in arrow func we cant use this keyword
