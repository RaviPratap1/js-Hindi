// Array 
const myarr = [0,1,2,3,4,5,null,"Ravi"]; 
const myarr2 = new Array(2,1,6,7,8,9)
// console.log(myarr[0])

// Method  ++++++++++++++++++++++

// myarr.push(10)
// console.log(myarr)

// myarr.pop();
// console.log(myarr)

// myarr.unshift(9)
// console.log(myarr)

// myarr.shift()
// console.log(myarr)

// console.log(myarr.includes(9))
// console.log(myarr.indexOf("Ravi"))

const newArr = myarr.join()
// console.log(myarr)
// console.log(newArr)          // type string 

// slice, splice
console.log("A",myarr)

const myn1 = myarr.slice(1,4)
console.log(myn1);

console.log("B",myarr);


const myn2 = myarr.splice(1,4)
console.log(myn2);

console.log("C",myarr);

