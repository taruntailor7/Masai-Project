var users = JSON.parse(localStorage.getItem("user")) || [];

function login() {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;

  var newUser = []; //

  var flag = false;
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      flag = true;

      var userObj = {
        name:users[i].name,
      };
      // console.log(users[i].name);
      // console.log(userObj);

      newUser.push(userObj);
      // console.log(newUser);
      localStorage.setItem("userName",JSON.stringify(newUser));
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