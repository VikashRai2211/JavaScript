//********************************    -:Number and Maths:-    **************************************** */

const score = 400

console.log(score);
console.log(typeof (score))

const balance = new Number(100)
console.log(balance);
console.log(typeof (balance));

console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber = 12.8983
console.log(otherNumber.toPrecision (5));

const hundreds = 1000000
console.log(hundreds.toLocaleString());



//***************************************      -:Maths:-    ************************************************************ */

console.log(Math);

console.log(Math.abs(-9));   // .abs negative value ko change karta hai

console.log(Math.round (4.5));    // .round .5 (4.5) ke baad wale value ko add kar deta hai
console.log(Math.ceil(4.0000001));   // .ceil means (.) ke baad 0 ke alaawa kuchh bhi ho value me +1 ho jata hai (4.1020 = 5)
console.log(Math.floor(4.9));   //.floot means (.) ke baad kuchh bhi ho use remove kar deta hai (4.8 = 4)

console.log(Math.min(2,4,6,3,1,9));  // .min ka use minimam value dekhene ke liye use karte hai 
console.log(Math.max(2,4,6,3,1,9));  // .max ka use maximam value dekhene ke liye use kate hai 

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log((Math.random() * 10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

