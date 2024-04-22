let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());  //Mon Oct 09 2023 05:13:53 GMT+0000
// console.log(myDate.toDateString());  //Mon Oct 09 2023
// console.log(myDate.toLocaleString());  //10/9/2023, 5:15:23 AM
// console.log(myDate.toJSON());  2024-04-22T05:58:45.066Z
// console.log(typeof myDate);                 //object


let myCreatedDate = new Date(2023,0,23);
// console.log(myCreatedDate);               //2023-01-23T00:00:00.000Z
// console.log(myCreatedDate.toDateString());     //Mon Jan 23 2023
// console.log(myCreatedDate.toLocaleString());     //1/23/2023, 12:00:00 AM     **************

let myCreatedDate1 = new Date("01-14-2023");
// console.log(myCreatedDate1.toLocaleString());   //console.log(myCreatedDate.toLocaleString());


let myTimeStemp =Date.now() 
// Convert millisecond +++++++++++
// console.log(myTimeStemp)
// console.log(myCreatedDate1.getTime())

// console.log(Math.floor(myTimeStemp/1000))    // Convert cecond

// console.log(myDate.getMonth())
// console.log(myDate.getDay())
// console.log(myDate.getFullYear())
// console.log(myDate.getMilliseconds())

// console.log(myDate.toLocaleString('default', {
//     weekday:"long",
//     day:"2-digit"
// }))
