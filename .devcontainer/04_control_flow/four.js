// const coding =["js","java", "cpp","Python"]

// const values = coding.forEach( (item)=> {
// console.log(item)
// })

// console.log(values);   //no return  value


const myNums = [1,2,3,4,5,6,7,8]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums)                //return  value

// ----------------OR -----------------

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })
// console.log(newNums) 

// ----------------OR -----------------


const newNums = []
myNums.forEach( (num) => {
    if(num>4){
        newNums.push(num)
    }
})

console.log(newNums)

