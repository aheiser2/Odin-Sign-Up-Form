const inputs = document.querySelectorAll('input')

const patterns = {
    phone: /^\d{10}$/,
    fname: /^[a-zA-Z]+$/i,
    lname: /^[a-zA-Z]+$/i,
    password: /^[\w@\-!#%&]{7,18}$/,
    conPassword: /^[\w@\-!#%&]{7,18}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{3})(\.[a-z]{2-18})?$/

}

function validate(field, regex){
    // console.log(field)
   if(regex.test(field.value)){
    field.className = "valid";
   } else {
    field.className = "invalid";
   }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e)=> {
        validate(e.target, patterns[e.target.attributes.name.value])
    })
}) 

let pwd1 = document.querySelector("#password")
let pwd2 = document.querySelector("#conPassword")
pwd2.addEventListener('keyup', () => {
    if(pwd1.value == pwd2.value){
        console.log("passwords match")
        pwd2.className = "valid";
    } else {
        console.log("NOT A MATCH")
        pwd2.className = "invalid"
    }
})

let submitButton = document.querySelector("#submitButton")
function submit(){
    inputs.forEach((input) => {
        input.value = ""
    })
}

submitButton.addEventListener('click', submit)