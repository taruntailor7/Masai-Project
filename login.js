var arr = JSON.parse(localStorage.getItem("signup")) || [];
function login(event) {
  event.preventDefault();
  var email = document.getElementById("mail").value;
  var password = document.getElementById("password").value;
  var mobile = document.getElementById("mobile").value;
  
  

  var flag = false;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].mobile === mobile && arr[i].email === email && arr[i].password === password) {
      flag = true;
      break;
    }
  }
  if (flag) {
    alert("Login Successfull");
  } else {
    alert("Please Enter Correct Email and Password");
  }
}