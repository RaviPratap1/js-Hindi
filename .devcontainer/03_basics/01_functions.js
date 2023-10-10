// function addtwoNumber(num1, num2){
//    console.log( num1+num2)
// }


function addtwoNumber(num1, num2){
    // let result= num1+num2
    // return result;
    
     // or 
    return num1+num2;
 }

// addtwoNumber(2,8);
const result = addtwoNumber(2,8)
// console.log(result)


function loginUserMessage(username = "Sam"){
    if(!username){     // (username === undefined) = !username
        console.log("Please enter a username")
        return
    }

    return `${username} just logged in`

}
const lum =loginUserMessage()
// console.log(lum)


function calculateCartPrice(...n1){   //rest operator ...n1
    return n1
}

// console.log(calculateCartPrice(200,330,400))


const user = {
    username:"hitess",
    price: 199
}

function handleObject(anyobject){
    // console.log(   `Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

// ++++++++++++++++OR++++++++++++++++++
handleObject({
    username:"sameer",
    price:333
})


// function in Array 

const myNewarray =[200,333,878,90]

function returnSecondVlue(getArry){
    return getArry[3]
}

// console.log(returnSecondVlue(myNewarray))