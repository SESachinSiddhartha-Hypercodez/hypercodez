function loginform() {
    document.querySelector("form").style.display = "block";
}
function loginback() {
    document.querySelector("form").style.display = "none";
    document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
}
function search() {
    var srch = document.getElementById("search");
    if (srch.style.top == "-60px") {
        srch.style.top = "50px";
    }
    else if (srch.style.top = "50px") {
        srch.style.top = "-60px";
    }
}
function login(){
    var email =document.getElementById("email");
    email.style.borderBottomColor="red";
    document.getElementById("pass");
    pass.style.borderBottomColor="red";
    email.style.color="red";
    pass.style.color="red";
    alert("incorrect email or passowrd"); 
}