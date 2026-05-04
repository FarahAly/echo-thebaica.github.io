const form = document.getElementById('form')
const user = document.getElementsByClassName('user')
const input_reg = document.getElementsByClassName('input-reg')
const password_reg = document.getElementsByClassName('password-reg')
const ck_pass = document.getElementsByClassName('ck-pass')
const phone = document.getElementsByClassName('phone')
const error_message = document.getElementById('error_message')

form.addEventListener('submit',(e)=> {
    e.preventDefault()
    let errors=[]
    if(user){
        errors = getRegisterFormErrors(user.value, input_reg.value, password_reg.value, ck_pass.value, phone.value)
    }
    else{
        errors = getSigninFormErrors(input_reg.value, password_reg.value)
    }
    if(errors.length >0){
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
})


function getRegisterFormErrors(user ,input_reg, password, ck_pass,phone){
    let errors=[]

    if(user === '' || user == null){
        errors.push('user is required')
        user.parentElement.classList.add('incorrect')
    }
    if(input_reg === '' || input_reg == null){
        errors.push('email is required')
        input_reg.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null){
        errors.push('password is required')
        password.parentElement.classList.add('incorrect')
    }
   
    if(phone === '' || phone == null){
        errors.push('phone number is required')
        phone.parentElement.classList.add('incorrect')
    }
    if(password !== ck_pass){
        errors.push('password does not match')
        password.parentElement.classList.add('incorrect')
        ck_pass.parentElement.classList.add('incorrect')
    }
    return errors;
}

const allinputs = [user, input_reg, password_reg, ck_pass, phone]
allinputs.forEach(input =>  {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            error_message.innerText =''
            
        }
    })
