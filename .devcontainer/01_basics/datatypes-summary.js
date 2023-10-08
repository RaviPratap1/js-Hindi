// Primitive Data type ---> Call by value
// 7 type : String , number, boolean, null, undfined, BigInt, symbol 

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId)    //anotherId and id not same  (symbol is uniq)
const bignumber = 123432423534534534534545454n
// console.log(bignumber)


// Reference Dtat type (non primitive )
// Array, Objects, function

const heros = ["shaktiman", "naagraj", "doga"]

const obj ={
    fastName: "Ravi",
    lastName: "Pratap"
}

const myFunction = function(){
console.log("Hello world");
}
// check data type 
console.log(typeof id)
console.log(typeof myFunction)


