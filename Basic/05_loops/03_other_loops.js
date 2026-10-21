//----------------for of loops--------------

// for (const element of object) {
    
//     console.log("it is for of loops syntax");
// }



const arr = [1, 2, 3, 4, 5]

for (const num of arr) {

    console.log(num)
    
}


const greeting = "hello world! "

for (const greet of greeting) {

    // console.log(`This is my greet ${greet}`);
    
}


const myname = ["vikash", "rahul", "hacker"]

for (const name of myname) {

    // console.log(`student name :-${name}`);
    
}


// ---------------------- maps ------------------------


// const map = new map()

map.set('IN', "India")
map.set('JA', "Japan")
map.set('USA', "united state of america")

// console.log(map);

for (const key of map) {

    // console.log(map);
    
}

for(const [key, value] of map) {
    console.log(key, `:-`, value);
    
}


const myObject = {

    game1: 'pubg',
    game2: 'ff'
}

for (const [key, value] of myObject) {

    console.log(key, `:-`, value);
    
}