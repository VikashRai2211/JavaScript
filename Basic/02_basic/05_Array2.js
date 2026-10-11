//------------------------------:   Array   :----------------------------

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

// console.log(marvel_heros[3] [0]);
// console.log(marvel_heros[2]);


// dc_heros. push(marvel_heros);
// console.log(dc_heros);

// console.log(dc_heros[3]);
// console.log(dc_heros[3] [1]);
// console.log(dc_heros[3] [1] [1]);


// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);


// const anohter_array = [1, 2, 3, [4, 5, 6,],7,[6, 7, [4, 5]]]

// const real_another_array = anohter_array.flat(Infinity);
// console.log(real_another_array);


console.log(Array.isArray("vikahs"))
console.log(Array.from("vikash"))
console.log(Array.from({ name: "vikash" }))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));