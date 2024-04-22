// Array 
const myarr = [0,1,2,3,4,5,null,"Ravi"]; 
const myarr2 = new Array(2,1,6,7,8,9)
// console.log(myarr[0])

// Method  ++++++++++++++++++++++

// myarr.push(10)
// console.log(myarr)   //[9,0,1,2, 3,4,5, null, 'Ravi', 10]

// myarr.pop();
// console.log(myarr)   //[9,0,1,2, 3,4,5, null, 'Ravi']

// myarr.unshift(9)
// console.log(myarr)    //[9,0,1,2, 3,4,5, null, 'Ravi']

// myarr.shift()
// console.log(myarr)      //[0,1,2,3,4,5,null, 'Ravi']

// console.log(myarr.includes(9))
// console.log(myarr.indexOf("Ravi"))

// const newArr = myarr.join()
// console.log(myarr)
// console.log(newArr)          
// console.log(typeof newArr)          // type string 

// slice, splice
console.log("A",myarr)

const myn1 = myarr.slice(1,4)
console.log(myn1);

console.log("B",myarr);


const myn2 = myarr.splice(1,4)
console.log(myn2);


console.log("C",myarr);

