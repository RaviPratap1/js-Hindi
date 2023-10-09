// singleton


// object literals 


const mystm = Symbol("key1")


const jsUser ={
    Name:"Ravi",
    "fullName":"Ravi Pratap",
    [mystm]:"myKey1",                     
    age: 19,
    location: "amanpur",
    email:"rp345345@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(jsUser.email)
//or
// console.log(jsUser["email"])
// console.log(jsUser["fullName"])

// console.log(jsUser[mystm])


// change data in object ++++++++++++++
// jsUser.age= 20;
// console.log(jsUser["age"])

// Object.freeze(jsUser);
// jsUser.age= 22;
// console.log(jsUser["age"])
// console.log(jsUser)


jsUser.greeting = function(){
    console.log("hello js user")
}
jsUser.greeting2 = function(){
    console.log(`hello js user, ${this.Name}`)
}

console.log(jsUser.greeting)
console.log(jsUser.greeting())

console.log(jsUser.greeting2())