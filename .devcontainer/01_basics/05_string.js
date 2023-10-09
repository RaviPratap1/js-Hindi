const Name = "Ravi";
// Or 
const gameName= new String('hitesh-chodhary-com')

const repoCount = 50
// console.log(Name+ repoCount+ "value")
// shortCut 
// console.log(`Hello my name is ${Name} and my repo count is ${repoCount}`)

// console.log(gameName[0])
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('s'))

const newString = gameName.substring(0,4)
// console.log(newString)

const anotherString = gameName.slice(-8,4);
// console.log(anotherString)

const newString1= "    hitesh"
// console.log(newString1)
// console.log(newString1.length)
// console.log(newString1.trim())
// console.log(newString1.trim().length)


const url = "https://hitesh.com/hitesh%20choudhary"
// console.log(url.replace('%20', '_'))

url.includes('hitesh')
// console.log(url.includes('hitesh'))

console.log(gameName.split('-'))
