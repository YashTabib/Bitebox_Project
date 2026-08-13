function login(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let error=document.getElementById("error")
    if(email==="admin@gmail.com" && password==="admin"){
        localStorage.setItem("isLoggedIn","true");
        localStorage.setItem("user","email")
            window.location.href="index.html";
    }
    else{
        error.innerText="Invalid Username and Password";
    }
}
function Togglepassword(){
    let passwordinput=document.getElementById("password");
    if(passwordinput.type==="password"){
        passwordinput.type="text";
    }
    else{
        passwordinput.type="password"
    }
}
function toggleMenu(){
    let menu=document.getElementById("navMenu");
    let icon=document.getElementById("menuIcon");

    menu.classList.toggle("show");

    if(menu.classList.contains("show")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }else{
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars")
    }
}