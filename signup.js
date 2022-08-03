var arr = [];
function signup(event) {
  event.preventDefault();
  var data = {
    name: document.getElementById("name").value,
    email: document.getElementById("mail").value,
    password: document.getElementById("password").value,
    mobile : document.getElementById("mobile").value,
  };
  arr.push(data);

  localStorage.setItem("signup", JSON.stringify(arr));
  alert("SignUp Succesfully")
  window.location.href = "./login.html";
}