const myNums = [1, 2, 3]


// const  myTotal = myNums.reduce( (acc, currval) => {
//     console.log(`acc ${acc} and currval: ${currval}`)
//     return acc+currval
// },0 )

// const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)
// console.log(myTotal)

const shoppingCart = [
    {
        itemName: "Python course",
        price: 1999
    },
    {
        itemName: "js course",
        price: 3999
    },
    {
        itemName: "java course",
        price: 4999
    },
    {
        itemName: "html course",
        price: 9
    },
    {
        itemName: "Css course",
        price: 99
    },
]


const cartTotal = shoppingCart.reduce((sum,value) => sum+ value.price ,0 )
console.log(cartTotal)