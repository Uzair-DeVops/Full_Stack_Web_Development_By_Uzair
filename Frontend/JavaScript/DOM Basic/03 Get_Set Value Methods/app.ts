let firstName  = document.getElementsByClassName("hello")[0] as HTMLElement;



// to get inner text
console.log(firstName.innerText); // undefined

// to get inner html
console.log(firstName.innerHTML); // undefined
// to get all the attrtibutes
console.log(firstName.attributes); // undefined
// to get one specific attritube by name
console.log(firstName.getAttributeNode("class")); // undefined
// to get the attribute value
console.log(firstName.getAttribute("class")); // undefined



// seting value

firstName.innerText = "Hello Worlds!";
console.log(firstName.innerText); // Hello World!
// console.log(firstName.innerHTML); // Hello World!
// firstName.innerHTML = "<h1>Hello World!</h1>";


// setattrtibute
firstName.setAttribute("class", "testclass");


// 
firstName.attributes
