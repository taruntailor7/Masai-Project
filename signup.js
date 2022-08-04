var user = JSON.parse(localStorage.getItem("user")) || [];

document.querySelector("form").addEventListener("submit", getData);

function getData() {
  event.preventDefault();
  var data = {
    name: document.getElementById("name").value,
    mobile : document.getElementById("mobile").value,
    email: document.getElementById("email").value,
    password: document.getElementById("pass").value,
  };
  user.push(data);
  // console.log(user);
  localStorage.setItem("user", JSON.stringify(user));
  alert("SignUp Succesfully!");
  window.location.href = "./login.html";
}