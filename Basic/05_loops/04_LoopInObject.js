// --------- loops in Object ---------

const myObject = {

    html: 'hyper text of markup language',
    js: 'java script',
    swipf: 'swifr by apple'
}

for (const key in myObject) {

    console.log(key);
    console.log(myObject[key]);

    console.log(`${key} :- ${myObject[key]}`);
    
}


const Super_hero = ["Ayranman", "Spiderman", "Thar", "Batman"]

for (const key in Super_hero) {
    
    // console.log(key);
    // console.log(Super_hero[key]);

    console.log(`Super hero no. ${key} :- ${Super_hero[key]}`);
    
}