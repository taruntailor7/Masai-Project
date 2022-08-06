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
  
  var flag = false;
  for(var i=0;i<user.length;i++) {
    if(data.email === user[i].email || data.mobile === user[i].mobile ){
      flag = true;
      break;
    }
  }

  if(flag == true){
    alert("User already exists !");
  }
  else{
    user.push(data);
    localStorage.setItem("user", JSON.stringify(user));
    alert("Successfully Signed Up !");
    window.location.href = "./login.html";
  }

  // alert("Successfully Signed Up !");
  // window.location.href = "./login.html";
}