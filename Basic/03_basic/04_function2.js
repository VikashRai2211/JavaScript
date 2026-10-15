
function calculateCardPrice(val1, val2, ...num1) {

    return num1

}

// console.log(calculateCardPrice(100, 200, 700, 500));

const user = {
    username: "vikash",
    prices: 199

}

function handleObject(anyobject) {

    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}

handleObject({

    username: "gopi",
    price: 399,
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[2]

}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500, 1000]));