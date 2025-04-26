const namee = document.getElementById("namei");
const email = document.getElementById("emaili");
const password = document.getElementById("passwordi");
const btn = document.getElementById("btn-red");



btn.addEventListener("click", (e) => {
    e.preventDefault();

    const nameValue = namee.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    if (!nameValue || !emailValue || !passwordValue) {
        alert("Please fill in all fields.");
        return;
    }


    localStorage.setItem("name", nameValue);
    localStorage.setItem("email", emailValue);
    localStorage.setItem("password", passwordValue);

    alert("Account created successfully!");
    window.location.href = "login.html";
});

/* for menubar clicking*/

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
});