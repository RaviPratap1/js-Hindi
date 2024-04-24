const books = [
    {title:"Book one", genre:"history", publish:1996, edition: 2001},
    {title:"Book two", genre:"science", publish:1995, edition: 2000},
    {title:"Book three", genre:"math", publish:1933, edition: 2002},
    {title:"Book four", genre:"chemistry", publish:1999, edition: 2004},
    {title:"Book five", genre:"science", publish:1990, edition: 2003},
    {title:"Book six", genre:"computer", publish:1910, edition: 2005},
    {title:"Book siven", genre:"Hindi", publish:1992, edition: 2022},
    {title:"Book eight", genre:"history", publish:1991, edition: 2023},
]

const userBooks = books.filter( (bk) => bk.genre === "history")
console.log(userBooks)


const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum =myNum.map( (num) => num+10 )

//chaining 
const newNum =myNum
                    .map( (num) => num*10)
                    .map( (num) => num+1)
                    .filter( (num) => num <= 40)   // true false return
 
console.log(newNum)