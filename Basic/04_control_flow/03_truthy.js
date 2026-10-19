
// falsy value :-
                // false, 0, -0, BigInt, "", null, undefined, NaN 

//  truthy value :-
//                 "0", 'fasle', " ", [] , {} , function() {}             


const userEmail = []

// if (userEmail) {
//     console.log("got user email");

// }else {
//     console.log("Don't have user email");
// }

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys (emptyObj) .length === 0) {
    console.log("Object is empty");
    
}


// Nullish coalescing Operater (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 29
val1 = null ?? 12 ?? 33

console.log(val1);


const icePrice = 100

icePrice <=80 ? console.log("less than 80 ") : console.log("more than 80");  

