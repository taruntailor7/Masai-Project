document.querySelector("#paymentBtn").addEventListener("click",function(event){
    event.preventDefault();
    var name="abcd"
    var cardNum="123456781234";
    var cVV=789;
    var address="banglore"
    var expireDate="05/25";
    var otP="123456";
    var cardnumber=document.querySelector("#cardNum").value;
    var name=document.querySelector("#name").value;
    var address=document.querySelector("#address").value;
    var cvv=document.querySelector("#cvv").value;
    var expdate=document.querySelector("#date").value;
    if(cardnumber==cardNum && cvv==cVV && expireDate==expdate ){
    alert("success full ");
    window.location="otp.html";
    }
    else{
        alert("Please fill the correct information");
        document.getElementById("paymentBtn").addEventListener("click",function(){
            window.location.href="payment.html";
        
        })
        
    }
});



