//***********************    -: Array :-     ****************** */

const myarr = [0, 1, 2, 3, 4, 5]
// // console.log(myarr);

// // console.log(myarr[0]);
// // console.log(myarr [3]);

// myarr.push(6)
// // console.log(myarr);

// myarr.push(7, 8, 9)
// // console.log(myarr);

// myarr.pop(0)
// // console.log(myarr);

// // myarr.unshift(13)
// myarr.shift()
// // console.log(myarr);


// const arr = [0, 1, 2, 3, 4, 5]
// // console.log(arr.includes(9));
// // console.log(arr.indexOf(3));

// const newarr = arr.join()

// console.log(arr);
// console.log(newarr);
// console.log(typeof newarr);

//-------------: slice, splice :-----------

console.log("A ", myarr);

const myn1 = myarr.slice(1, 3)
console.log(myn1);
console.log("B ", myarr);

const myn2 = myarr.splice(1, 3)
console.log("c ", myarr);
console.log(myn2);

