// function myName(){

//     console.log("v");
//     console.log("i");
//     console.log("k");
//     console.log("a");
//     console.log("s");
//     console.log("h");


// }
// myName()

// function addTwoNumber(number1, number2){

// //     console.log(number1 + number2);

// // }

// function addTwoNumber(number1, number2){

//   // let result = number1 + number2
//   // return result

//   return number1 + number2


// }

// addTwoNumber(4, 5)
// const result = addTwoNumber(4,5)
// console.log("Result :",result);

function loginUserMassage(username = "vik") {

  if (!username) {

    console.log("please enter a username");
    return
  }

  return `${username} just logged in`
}


// console.log(loginUserMassage("vikash"));

console.log(loginUserMassage("vikash"));
