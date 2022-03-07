/** for statement */

  for (let i = 0; i < 10; i++) {
  console.log(i);
} 

/** for in */
const person = {
    name: 'lokesh',
    age: 21
};

for (let key in person)
   console.log(key,':' ,person[ key]); 


   /** for of */

 const colors = ['red','blue', 'green'];
 for (let color of colors)
 console.log(color);
