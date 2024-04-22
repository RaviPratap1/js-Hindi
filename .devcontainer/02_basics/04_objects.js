


// const tinderUser = new Object()   //singaltan Object
const tinderUser = {}           //non singaltan Object
// console.log(tinderUser)

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularuser = {
    email: "sodf53@gmail.com",
    fullname: {
        username: {
            firstname: "Ravi",
            lastname: "Pratap"

        }
    }
}

// console.log(regularuser.fullname.username.firstname)

const obj1 = {1:"a",  2: "b"}
const obj2 = {3:"c",  4: "d"}
const obj3 = {5:"e",  6: "f"}

// const obj3 = {obj1, obj2}
const obj4 = Object.assign(obj1,obj2)
const obj5 = Object.assign({},obj1,obj2,obj3)
const obj6 = {...obj1,...obj2}    //Best method


// console.log(obj4)
// console.log(obj5)
// console.log(obj6)

const users = [
    {
        id:1,
        email:"rp145453@gmail.com"
    },
    {
        id:2,
        email:"rp25453@gmail.com"
    },
    {
        id:3,
        email:"rp34545@gmail.com"
    },
    {
        id:4,
        email:"rp454@gmail.com"
    },
    {
        id:5,
        email:"rp545@gmail.com"
    }
]

console.log(users[1].email)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    coursename: "js in hindi",
    price: "999",
    coursetecher: "hitesh"
}
 

// most  ++++++++++++++++++++++++++++++++++++++++

const {coursetecher} =course;
console.log(coursetecher)

const {coursetecher: teacher} =course;
console.log(teacher)

// Api  +++++++++++++++++++++++++++++++
// json 
// {
//     "name":"hittes",
//     "price": "Free",
//     "coursetecher": "hitesh"
// }
// +++++++++++++++++OR+++++++++++++++
// [
//     {},
//     {},
//     {},
//     {},
// ]