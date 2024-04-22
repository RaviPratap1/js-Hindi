const user ={
    username: "hitesh",
    price:999,
    welcomeMassage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }

}

// user.welcomeMassage()
// user.username = "sem"
// user.welcomeMassage()
// console.log(this)



function chai(){
    let username = "hitesh"     //  function ke andar this keyword use nahi kar sakte hai
    console.log(this.username)   // undefined
}
// chai()

const chai1 = function(){
    let username = "hitesh"     //  function ke andar this keyword nahi kar sakte hai
    console.log(this.username)   // undefined
}
// chai1()


const chai2 = () => {
    let username = "hitesh"     //  function ke andar this keyword nahi kar sakte hai
    console.log(this.username)   // undefined
}
// chai2()


// Arrow function () => {}

const addtwo = (num1, num2) => {
    return num1+num2;
}
console.log(addtwo(2,3))

const addtwo1 = (num1, num2) => num1+num2;        //or
const addtwo2 = (num1, num2) => (num1+num2)       //or
const addtwo3 = () => ({username:"Ravi"})       //or

// console.log(addtwo1(6,3))
// console.log(addtwo2(9,3))
// console.log(addtwo3())   


// const myarray = [2,5,3,7,8]
// myarray.forEach()




