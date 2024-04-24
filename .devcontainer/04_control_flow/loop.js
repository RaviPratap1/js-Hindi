// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element)
    
// }

// For of 

// const arr = [1,2,3,4]

// for (const num of arr) {
//     // console.log(num);
// }



// const greeting = "Hello world"

// for (const greet of greeting) {
//     console.log(greet);
// }


//Maps

// const m = new Map()

// m.set('IN', "INDIA")
// m.set('US', "UNITED STATES OF AMERECA")
// m.set('IN', "INDIA")
// m.set('FR', "France")

// console.log(m)

// for (const [key, value] of m) {               
//     console.log(key, ':-', value)
    
// }


// const myobj = {
//     'game': 'bgmi',
//     'game2': 'NFG',
//      Pubg: "Bgmi"
// }

// for (const [key, value] of myobj) {      //Object par for of loop not work 
//     console.log(key, ':-', value)         // myobj is not iterable
    
// }


// for (const key in myobj) {
//     console.log(key)         // keys
//     console.log(myobj[key])    //value
   
//     }

//     const Programming = ["js","rb","Python","java"]
//     for (const key in Programming) {
//         console.log(Programming[key])
       
       
//         }


     // Objects par for in loop
    // Arrays par for of loop



    const coding =["js","java", "cpp","Python"]

coding.forEach( function (val){
    console.log(val);
})

    // ------------OR --------

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

  // ------------OR --------

function printMe(item2){
    console.log(item2)
}

coding.forEach(printMe)     //printMe --> reference  &&  printMe() --> execute



 