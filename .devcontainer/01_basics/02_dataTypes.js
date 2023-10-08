"use strict"; // treat all js code as newer version

// alert("Hello he")  // we are using nodejs, not browser
let Fullname = "Ravi Pratap"   //string
let age = 18               //number
let isLoggedIn = false       //Boolean
let x= null                       //null
let  state               //undifine
let sym =Symbol("foo")                          // symbol
console.table([Fullname, age, isLoggedIn, x, state, sym])
console.table([typeof(Fullname), typeof(age), typeof(isLoggedIn), typeof(x), typeof(state), typeof(sym)])