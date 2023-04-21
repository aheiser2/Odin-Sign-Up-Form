const inputs = document.querySelectorAll('input')

const patterns = {
    phone: /^\d{10}$/,
    fname: /^[a-zA-Z]$/i,
    lname: /^[a-zA-Z]$/i,
    password: /^[\w@-]{7,18}$/,
    conPassword: /^[\w@-]{7,18}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2})(\.[a-z]{2-18})?$/

}

function validate(field, regex){
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