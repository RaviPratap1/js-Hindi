// Immediately Incoked function Expressionss (IIFE)

// normal +++++++++++++++++++++
function chai(){
    console.log("DB Connected")
}
// chai()


// (IIFE)++++++++++++++++++
(function chai(){
    // named IIFE 
    console.log("DB Connected")
})();

( () => {
    console.log("DB Connected-1 ")
})();

( (name) => {
    console.log(`DB Connected-2 ${name}`)
})('ravi'); 

