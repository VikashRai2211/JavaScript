
//*************************************     -: String :-   ************************************************************** */



const name = "vikash"

const repocount = 30

// console . log (name + repocount);

console . log (`hello my name is ${name .Touppercase} and my repo count is ${ repocount}`);



const gamename = new String('VikashKumar');

console . log (gamename [0]);

console.log (gamename [4]);

console . log (gamename.__proto__);

console.log(gamename.length);   // for length..

console.log(gamename . toUpperCase());  // for UpperCase...

console.log (gamename . toLowerCase());  //  for LowerCase...

console.log (gamename . charAt(3));     // kis number par kaun sa charector hai..

console.log(gamename . indexOf('s'));   //  kis charector par kaun sa number (index) hai..

console.log(gamename.substring(0,3));      // (n-1) number par charector ko print karta hai..

console.log(gamename . slice(-11, 4));   //  nuber par charector ko print karta hai (reverse me bhi)..

const newStringOne = "   viakash   "

console.log(newStringOne);
console.log(newStringOne.trim());    // Trim space ko removed (Delete ) kar deta hai..

const url = "https://vikash.com/vikahs%20kumarrai"

console.log (url.replace('%20' , '_'));   //Its use replace value ('%20', '_')

console.log (url.includes ('karan'));  // isame value do ye batayega ki value hai ya nhi (vikash)..

const newgamename = "vikash kumar rai"

console.log(newgamename.split(' '));


