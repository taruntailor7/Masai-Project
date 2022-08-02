var cartProduct = JSON.parse(localStorage.getItem("cart")) || [];

var cart = document.getElementById('cart');
if(cartProduct.length == 0){
    displayEmptyProduct();
}
else{
    displayProduct();
}

function displayEmptyProduct(){
    var h1 = document.createElement('h1');
    h1.innerText = "My Cart (0 Items)";

    var imgDiv = document.createElement('div');
    imgDiv.setAttribute("class", "img");

    var image = document.createElement('img');
    image.setAttribute("src","/system-zombies/images/empty.png");

    imgDiv.append(image);

    var h2 = document.createElement('h2');
    h2.innerText = "Whoops... Cart is empty";

    var p = document.createElement('p');
    p.setAttribute("class", "underline");
    p.innerText = "Add some fruits, veggies and dairy products to your cart";

    var div = document.createElement('div');
    div.setAttribute("id", "button");

    var a = document.createElement('a');
    a.setAttribute("href", "index.html");

    var btn = document.createElement('button');
    btn.innerText = "Let's Shop!";

    a.append(btn);
    div.append(a);

    document.getElementById("cart").append(h1,imgDiv,h2,p,div);

}
function displayProduct(){

    cartProduct.map(function(element, index){
        var div = document.createElement("div");

        var image = document.createElement("img");
        image.setAttribute("src", element.image_url);

        var p = document.createElement("p");
        p.innerText = element.name;

        var quantity = document.createElement("p");
        quantity.innerText = element.quantity;

        var price = document.createElement("h4");
        price.innerText = "₹ "+ element.price;

        var btn = document.createElement("button");
        btn.innerText = "Remove";
        btn.addEventListener("click", function(){
            remove(index);
            refreshPage();
        });

        div.append(image, p, quantity, price,btn);
        document.getElementById("cart").append(div);
    });
}

function remove(index){
    cartProduct.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cartProduct));
    displayProduct();
}

function refreshPage(){
    window.location.reload();
}