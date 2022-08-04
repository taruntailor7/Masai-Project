var users = JSON.parse(localStorage.getItem("user")) || [];

function login() {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;

  var flag = false;
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      flag = true;
      break;
    }
  }
  if(flag){
    alert("Login Successfull");
    window.location.href ="./homepage.html";
  } 
  else{
    alert("Wrong Credentials");
  }
}