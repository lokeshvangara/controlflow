//date : date object is used to get date or you can set date for a particular event.
//display date
const now = new Date();
console.log(now);


// Access date components: There are methods to access the year, month and so on from the Date object:

// getFullYear() : Get the year (4 digits)
// getMonth()    : Get the month, from 0 to 11.
// getDate()     : Get the day of month, from 1 to 31, the name of the method does look a little bit strange.
// getHours(), getMinutes(), getSeconds(), getMilliseconds(), getday()

//previous year
const d = new Date(99, 11, 24);
document.getElementById("demo").innerHTML = d;
