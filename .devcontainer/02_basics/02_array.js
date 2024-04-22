const marval_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marval_heros.push(dc_heros);
// console.log(marval_heros)

// const allHeros =marval_heros.concat(dc_heros);
// console.log(allHeros)

// const allHeros1 =[...marval_heros, ...dc_heros];   //best method
// console.log(allHeros1)      

// const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_anotherArray = anotherArray.flat(Infinity);
// console.log(anotherArray)
// console.log(real_anotherArray)

console.log(Array.isArray("Ravi"))    // false
console.log(Array.from("Ravi"))     // convert in Array
console.log(Array.from("Ravi Pratap"))     // convert in Array
console.log(Array.of(1,2,3,4))     // convert in Array

// learn
//  Array.isArray
// Array.from
// Array.of