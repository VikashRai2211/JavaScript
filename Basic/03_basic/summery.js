// --------------- object -------------

const newUser = {

    gmailId : "gopi@gmial.com",
    city : "varanasi",
    fullName : {
        firstName : "vikash",
        lastName : "kumar",

    }
}

console.log(newUser.fullName);
console.log(newUser.fullName.firstName);
console.log(newUser.fullName.lastName);

// --------- function ---------------

function city (){
    
    console.log("Varanasi");
    console.log("Delhi");
    console.log("Mumbai")

}

city()


function Addnums () {

    console.log(num1, num2);
}

Addnums(4, 5)
const result = Addnums(4, 5)
console.log(result);


// ----------------- scope ---------- 

function state () {
    const state_name = "Uttar Pradesh"

    function district () {
        const district_name = "Varanasi, jaunpur, Mirzapur, Baliya"
    }

    console.log (state_name);

    state()
}

