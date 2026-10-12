// // const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "vikash"
tinderUser.isLoggedIn = false


// // console.log(tinderUser);

// const vikashUser = {

//     gmail : "viaksh@gmail.com",
//     age: 23,
//     fullName :{

//         first:"vikash",
//         last: "kumar",

// //     }

// // }

// // console.log(vikashUser);
// // console.log(vikashUser.fullName.last);
// // console.log(vikashUser.fullName.age);

// // const obj1 = {1: "a", 2: "b"}
// // const obj2 = {3: "a", 4: "b"}

// // // const obj3 = {obj1, obj2};
// // // const obj4 = Object.assign( {}, obj1, obj2);

// // const obj7 = {...obj1, ...obj2}
// // console.log(obj7);

// const users = [
//     {
//         id: 232,
//         mail: "vikash@gmail.com",
//     },
//      {
//         id: 2,
//         mail: "ash@gmail.com",
//     }

// ]

// console.log(users[0].id);
// console.log(users[1].mail);

// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('mail'));

const course = {
    courseName: "js in english",
    coursePrice: 444,
    courseInstructor: "vikash"
}

// console.log(course.courseInstructor);
const { courseInstructor: intr } = course

// console.log(courseInstructor);
console.log(intr);