var cartProduct = JSON.parse(localStorage.getItem("cart")) || [];
// console.log(cartProduct);
var cart = document.getElementById('cart');
if(cartProduct.length == 0){
    displayEmptyProduct();
}
else{
    displayProduct(cartProduct);
    cartValue();
}

document.getElementById("ite").innerText = cartProduct.length;
// document.querySelector('#cart > h1').innerText = "Cart items:" + cartProduct.length;
document.getElementById('items').innerText =cartProduct.length+" items";
document.getElementById('items').style.fontSize="12px";

function cartValue(){
    var total = 0;
    if(cartProduct.length!=0){
        cartProduct.map(function(element){
            total += element.price*element.piec;
        });
    }
    else{
        total = cartProduct.reduce(function(accumulator, element) {
            return accumulator+Number(element.price);
        },0);
    }

    document.getElementById("total").innerText ="₹ "+total;
    document.getElementById("totals").innerText ="₹ "+total;
    document.getElementById("pay").innerText ="₹ "+total;
    document.getElementById("check").innerText ="₹ "+total;
}

// Header Section
var loggedInUser = JSON.parse(localStorage.getItem("userName")) || [];
// console.log(loggedInUser);

document.getElementById("user").innerText =loggedInUser[0].name;

function displayEmptyProduct(){
    document.getElementById('cart').style.display = 'none';
    document.getElementById('cartValue').style.display = 'none';
    var h1 = document.createElement('h1');
    h1.innerText = "My Cart (0 Items)";

    // var imgDiv = document.createElement('div');
    // imgDiv.setAttribute("class", "img");

    var image = document.createElement('img');
    image.setAttribute("src","https://webasset.fraazo.com/production/empty_cart.35cdf7d10a7af693e2ea.png");

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
function displayProduct(prod){
    document.getElementById("empty").style.display = "none";
    document.getElementById("cart").innerText="";
    prod.map(function(element, index){
        // var h1 = document.createElement("h1");
        // h1.innerText = cartProduct.length;

        var div = document.createElement("div");
        // div.style.border = "1px solid blue";
            var image = document.createElement("img");
            image.setAttribute("src", element.image_url);

        var mainDiv = document.createElement("div");
        mainDiv.setAttribute("class","nameAndQuantityPrice");
        // mainDiv.style.border = "1px solid red";
        
        var div1 = document.createElement("div");
        // div1.style.border = "1px solid red";
            var p = document.createElement("p");
            p.innerText = element.name;

            var quantity = document.createElement("p");
            quantity.innerText = element.quantity;

            var price = document.createElement("h4");
            price.innerText = "₹ "+ element.price*element.piec; //jsoidghdhrgdd

        div1.append(p,quantity,price);

        var btnDiv = document.createElement("div");
        btnDiv.width = "100%"
        // btnDiv.style.border = "1px solid black"

            var minus = document.createElement("button");
            minus.innerText = "-";
            minus.addEventListener("click",function(){
                decrease(index);
                refreshPage();
            });

            var pieces = document.createElement("p");
            pieces.innerText = element.piec;
            pieces.setAttribute("id", "decVal")
            pieces.style.marginTop = "80px"

            var plus = document.createElement("button");
            plus.innerText = "+";
            plus.addEventListener("click",function(){
                increase(index);
                refreshPage();
            });

        btnDiv.append(minus, pieces, plus,);

        var btn = document.createElement("button");
        btn.innerText = "Remove";
        btn.addEventListener("click", function(){
            remove(index);
            refreshPage(); // this is for refreshing the page because when we remove last one page should refresh and then show empty cart.
        });

        mainDiv.append(div1, btnDiv, btn);

        div.append(image,mainDiv);
        document.getElementById("cart").append(div);
    });
}

function remove(index){
    cartProduct.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cartProduct));
    displayProduct(cartProduct);
}

function refreshPage(){
    window.location.reload();
}

function decrease(index){
    cartProduct[index].piec = cartProduct[index].piec - 1;
    if(cartProduct[index].piec == 0){
        remove(index);
    }
    localStorage.setItem("cart",JSON.stringify(cartProduct));
    displayProduct(cartProduct);
    
}
function increase(index){
    cartProduct[index].piec = cartProduct[index].piec + 1;
    localStorage.setItem("cart",JSON.stringify(cartProduct));
    displayProduct(cartProduct);
}

// var otp = JSON.parse(localStorage.getItem("orderOtp"));
// console.log(otp);
// if(otp == 703865){
//     cartProduct.length = 0;
//     localStorage.setItem("cart",JSON.stringify(cartProduct));
//     // displayProduct(cartProduct);
//     // displayEmptyProduct();
// }

// console.log(cartProduct);