// query selector will target first occurence of the elemet 
// query selector all will target all occurences of the element
// query selector will return a single element
// query selector all will return a node list of elements

let firstelement = document.querySelectorAll(".hello")[1] as HTMLElement;
console.log(firstelement); // <h1 class="hello">Hello World!</h1>