const username = document.getElementById('username');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const passConf = document.getElementById('passConf');
const telephone = document.getElementById('telephone');

const confirm = document.getElementById('confirm');

function send(){
    let selectedaGender = document.querySelector('input[name="gender"]:checked');

    if(username.value==""||email.value==""||pass.value==""||passConf.value==""||telephone.value==""||!selectedaGender)
    {
        confirm.innerHTML = "please fill all fields";
    }else if(email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1){
        confirm.innerHTML = "invalid email";
    }else if(pass.value !== passConf.value){
        confirm.innerHTML = "passwords don't match!";
    }else if(/^\d+$/.test(telephone.value) === false){
        confirm.innerHTML = "invalid phone number";
    }else{
        confirm.innerHTML = "Done!";

        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", pass.value);
        localStorage.setItem("telephone", telephone.value);
        localStorage.setItem("Gender", selectedaGender.value);
    }
}

