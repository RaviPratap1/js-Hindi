let a= 10;
// const b = 20;
// var c = 30;

// console.log(a)
// console.log(b)
// console.log(c)

if(true){
    let a= 40;
    const b = 50;
    // var c = 60; 
    // console.log(a)
}

// console.log(a)
// console.log(b)
// console.log(c)


function one () {
const username = "Ravi"

function two () {
    const website = "youtube"
    console.log(username)
    
    }
    // console.log(website)  //not valid
    two()
}
// one()

// function two method ++++++++++++++++

console.log(addOne(5))

function addOne(num){
    return num+1;
}

// console.log(addTwo(8))      ---> ERROR 
const addTwo = function (num){
    return num+2;
}

console.log(addOne(5))
console.log(addTwo(8))






