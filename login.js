const loginEmail = document.getElementById("login-email")
const loginpass = document.getElementById("login-password")
const loginbtn = document.getElementById("login-btn")

loginbtn.addEventListener("click",(e)=>{
    e.preventDefault();

    const storeEmail = localStorage.getItem("email")
    const storePass = localStorage.getItem("password")

    const enteredEmail = loginEmail.value;
    const enteredPassword = loginpass.value;

    if (!loginEmail || !loginpass) {
        alert("Please fill in all fields.");
        return;
    }

    if(enteredEmail === storeEmail && enteredPassword === storePass){
        alert("Login Successfull");
        window.location.href="suuccess.html";
    }
    else{
        alert("Invalid Email or Password");
    }
})

/* for menubar clicking*/

const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('nav-open');
    });