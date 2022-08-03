var arr = [];
function signup(event) {
  event.preventDefault();
  var data = {
    name: document.getElementById("name").value,
    email: document.getElementById("mail").value,
    password: document.getElementById("password").value,
  };
  arr.push(data);

  localStorage.setItem("signup", JSON.stringify(arr));
  window.location.href = "./login.html";
}
