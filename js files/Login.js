let SignUpBtn = document.querySelector('.signupbtn');
let SignInBtn = document.querySelector('.signinbtn');
let namefield = document.querySelector('.name-field');
let title = document.querySelector('.title');
let Underline = document.querySelector('.Underline');
let text = document.querySelector('.text');

SignInBtn.addEventListener('click', ()=>{
    namefield.style.maxHeight = '0';
    title.innerHTML = "Sign In";
    text.innerHTML = "Forget Password";

    SignUpBtn.classList.add('disable');
    SignInBtn.classList.remove('disable');
    Underline.style.transform = 'translateX(35px)';
})

SignUpBtn.addEventListener('click', ()=>{
    namefield.style.maxHeight = '60px';
    title.innerHTML = "Sign Up";
    text.innerHTML = "Password Suggestion";
    SignUpBtn.classList.remove('disable');
    SignInBtn.classList.add('disable');
    Underline.style.transform = 'translateX(0)';
})




function togglePassword() {
    const passwordField = document.getElementById('password');
    const icon = document.getElementById('toggleIcon');
    const isHidden = passwordField.type === 'password';
    passwordField.type = isHidden ? 'text' : 'password';
    icon.classList.toggle('fa-eye', !isHidden);
    icon.classList.toggle('fa-eye-slash', isHidden);
  }

