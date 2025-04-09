// falsy are those values that will converted into false there are only five falsy value in js 
// null , undefined , 0 , "" , NaN
// truthy are those values that will converted into true 

console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));



// the conversion of boolean is done implicitly in js means that js automatically do this for us

// eg  when u right something in bracket after if statment js automatically convert that into boolean value
money = 0
if (money){
    console.log("you are rich")
}else{
    console.log("you are poor")
}