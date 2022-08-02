function myfun(){

    var k=document.querySelector("#inputbox")

    if(k.value=="1234")
    {
        alert("Your Order is successful")
        window.location="index.html"
    }
    else{
        alert("Wrong OTP")
    }
}