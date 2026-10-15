
const user = {
    username: "vikash",
    price: 999,

    welcomeMassage: function () {
        console.log(`${this.username} , welcome to website`);

        // console.log(this);
    }

}


user.welcomeMassage()
user.username = "gopi"
user.welcomeMassage()

// console.log(this);


function chai(){
    let username = "vikash"
    console.log(this.username);
}

chai()

const chai = function(){
    let username = "vikash"
    console.log(this.username);

}

// chai()


const chai = () => {
    let useername = "vikash"
    console.log(this);

}

// chai()


// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>num1 + num2

// const addTwo = (num1, num2) =>(num1 + num2)

const addTwo = (num1, num2) => ({username: "vikash"})


console.log(addTwo(4,3))