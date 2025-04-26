let pieces = (apple:number)=>{
    return apple *2
}

let juices = (apple:number):void => {
    console.log(`Your apple juice contain ${pieces(apple) } pieces apples`)

}
juices(5)


// in arrow func we cant use this keyword