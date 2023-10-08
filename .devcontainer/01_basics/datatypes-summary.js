// Primitive Data type ---> Call by value
// 7 type : String , number, boolean, null, undfined, BigInt, symbol 

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId)    //anotherId and id not same  (symbol is uniq)
const bignumber = 123432423534534534534545454n
// console.log(bignumber)


// Reference Data type (non primitive )
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
// console.log(typeof id)
// console.log(typeof myFunction)


// +++++++++++++++++++++++++++++++
//stack (Primitive)copy value,    Heap (Non-Primitive)refrence value

// Primitive 
let myname ="Ravi"
let anothername = myname
// console.log(anothername)
anothername ="chaiauecode"
// console.log(myname)
// console.log(anothername)


// Reference
let user1={
    email:"uer7264@gmail.com",
    upi:"user@ybl"
}
let user2= user1

user2.email  ="gfdfg454@gmail.com"
console.log(user2.email)
console.log(user1.email)


