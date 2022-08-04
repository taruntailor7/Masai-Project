var cartProduct = JSON.parse(localStorage.getItem("cart")) || [];

var cart = document.getElementById('cart');
if(cartProduct.length == 0){
    displayEmptyProduct();
}
else{
    // displayProduct();
    cartValue();
}
// Header Section
var loggedInUser = JSON.parse(localStorage.getItem("userName")) || [];
console.log(loggedInUser);

document.getElementById("user").innerText =loggedInUser[0].name;
document.getElementById("greet").innerText ="Thanks "+loggedInUser[0].name;

// document.querySelector('#cart > h1').innerText = "Cart items:" + cartProduct.length;
document.getElementById('items').innerText =cartProduct.length+" items";
document.getElementById('items').style.fontSize="12px";

function cartValue(){
    // var total = cartProduct.reduce(function(accumulator, element) {
    //     return accumulator+Number(element.price);
    // },0);

    var total = localStorage.getItem("total");
    // console.log(total);

    document.getElementById("total").innerText ="₹ "+total;
    document.getElementById("totals").innerText ="₹ "+total;
    document.getElementById("pay").innerText ="₹ "+total;
    document.getElementById("check").innerText ="₹ "+total;
}

function displayEmptyProduct(){
    document.getElementById('cart').style.display = 'none';
    document.getElementById('cartValue').style.display = 'none';
    var h1 = document.createElement('h1');
    h1.innerText = "My Cart (0 Items)";

    // var imgDiv = document.createElement('div');
    // imgDiv.setAttribute("class", "img");

    var image = document.createElement('img');
    image.setAttribute("src","/system-zombies/images/empty.png");

    // imgDiv.append(image);

    var h2 = document.createElement('h2');
    h2.innerText = "Whoops... Cart is empty";

    var p = document.createElement('p');
    p.setAttribute("class", "underline");
    p.innerText = "Add some fruits, veggies and dairy products to your cart.";

    // var div = document.createElement('div');
    // div.setAttribute("id", "button");

    var a = document.createElement('a');
    a.setAttribute("href", "homepage.html");

    var btn = document.createElement('button');
    btn.innerText = "Let's Shop!";

    a.append(btn);
    // div.append(a);

    document.getElementById("empty").append(h1,image,h2,p,a);

}
function displayProduct(){
    document.getElementById("empty").style.display = "none";
    // document.getElementById("cart").innerHTML="";
    cartProduct.map(function(element, index){
        var div = document.createElement("div");

        var image = document.createElement("img");
        image.setAttribute("src", element.image_url);

        var mainDiv = document.createElement("div");
        mainDiv.setAttribute("class","nameAndQuantityPrice");

        var div1 = document.createElement("div");

        var p = document.createElement("p");
        p.innerText = element.name;

        var quantity = document.createElement("p");
        quantity.innerText = element.quantity;

        var price = document.createElement("h4");
        price.innerText = "₹ "+ element.price;

        div1.append(p,quantity,price);

        var btn = document.createElement("button");
        btn.innerText = "Remove";
        btn.addEventListener("click", function(){
            remove(index);
            refreshPage(); // this is for refreshing the page because when we remove last one page should refresh and then show empty cart.
        });

        mainDiv.append(div1,btn);

        div.append(image,mainDiv);
        document.getElementById("cart").append(div);
    });
}

function remove(index){
    cartProduct.splice(index,1);
    displayProduct();
    localStorage.setItem("cart",JSON.stringify(cartProduct));
}

function refreshPage(){
    window.location.reload();
}