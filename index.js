var fruits = [
    {
        id: '1',
        image_url: "https://m.media-amazon.com/images/I/8124jPI4bKL._SX679_.jpg",
        name: "Indian Avocado",
        quantity: "1 pc",
        price: "89",
    },
    {
        id: '2',
        image_url: "https://m.media-amazon.com/images/I/413Q+GBBZWL.jpg",
        name: "Robusta Bnana",
        quantity: "1 Kg",
        price: "47",
    },
    {
        id: '3',
        image_url: "https://www.jiomart.com/images/product/600x600/590000508/raw-papaya-500-g-product-images-o590000508-p590000508-0-202207291755.jpg",
        name: "Raw Papaya",
        quantity: "1 pc",
        price: "32",
    },
    {
        id: '4',
        image_url: "https://www.jiomart.com/images/product/original/590000070/pineapple-queen-1-pc-approx-700-g-1200-g-product-images-o590000070-p590000070-0-202203170357.jpg",
        name: "pineapple",
        quantity: "1 pc",
        price: "62",
    },
    {
        id: '5',
        image_url: "https://images.healthshots.com/healthshots/en/uploads/2021/09/27184641/pomegranate-1600x900.jpg",
        name: "Pomegranate (Anar)",
        quantity: "1 kg",
        price: "120",
    },
    // {
    //     id: '6',
    //     image_url: "https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/432/original/data?width=256&height=256&format=webp",
    //     name: "Orange",
    //     quantity: "1 kg",
    //     price: "52",
    // },
    // {
    //     id: '7',
    //     image_url: "https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/442/original/data?width=256&height=256&format=webp",
    //     name: "Smoothie Combo (1kg Robusta Bnana + 1 pkt Blueberry)",
    //     quantity: "1 combo",
    //     price: "289",
    // },
    // {
    //     id: '8',
    //     image_url: "https://imagemaster.fraazo.com/fraazo-master/products/FAVO21.png?width=256&height=256&format=webp",
    //     name: "Coconut Combo (2 pcs Coconuts)",
    //     quantity: "1 combo",
    //     price: "60",
    // },
    // {
    //     id: '9',
    //     image_url: "https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/446/original/data?width=256&height=256&format=webp",
    //     name: "Prasad Combo (Royal Gala Apple, Green Pear, Robusta Banana)",
    //     quantity: "1 combo",
    //     price: "288",
    // },
    // {
    //     id: '10',
    //     image_url: "https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/447/original/data?width=256&height=256&format=webp",
    //     name: "Shubh Combo (Red Delicious Apple, Robusta Banana, Coconut)",
    //     quantity: "1 combo",
    //     price: "253",
    // },
];

var vegetables = [
    {
        id: '1',
        image_url: "https://m.economictimes.com/thumb/msid-95423731,width-1200,height-900,resizemode-4,imgsize-56196/tomatoes-canva.jpg",
        name: "Tomato",
        quantity: "1 kg",
        price: "35",
    },
    {
        id: '2',
        image_url: "https://images.hindustantimes.com/img/2021/11/15/1600x900/taro_root_thumb_1636958292113_1636958301570.jpg",
        name: "Arbi",
        quantity: "500 g",
        price: "37",
    },
    {
        id: '3',
        image_url: "https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2015/09/04/499124.gif?itok=MYn4E3K6",
        name: "Bnana Stem",
        quantity: "1 pc",
        price: "41",
    },
    {
        id: '4',
        image_url: "https://www.jiomart.com/images/product/600x600/590002136/onion-5-kg-pack-product-images-o590002136-p590002136-0-202203141906.jpg",
        name: "Onion",
        quantity: "1 kg",
        price: "26",
    },
    {
        id: '5',
        image_url: "https://m.media-amazon.com/images/I/61yXL70-RaL._SX679_.jpg",
        name: "Potato",
        quantity: "1 kg",
        price: "25",
    },
    // {
    //     id: '6',
    //     image_url: "https://imagemaster.fraazo.com/fraazo-master/products/VMUL12.png?width=256&height=256",
    //     name: "Radish",
    //     quantity: "1 kg",
    //     price: "52",
    // },
    // {
    //     id: '7',
    //     image_url: "https://imagemaster.fraazo.com/fraazo-master/products/VCAP12.png?width=256&height=256",
    //     name: "Green Capsicum",
    //     quantity: "250 g",
    //     price: "32",
    // },
    // {
    //     id: '8',
    //     image_url: "https://imagemaster.fraazo.com/fraazo-master/products/VCAU12.png?width=256&height=256",
    //     name: "Colliflower",
    //     quantity: "1 pc",
    //     price: "39",
    // },
    // {
    //     id: '9',
    //     image_url: "https://imagemaster.fraazo.com/fraazo-master/products/VCAB12.png?width=256&height=256",
    //     name: "Cabbage",
    //     quantity: "1 pc",
    //     price: "41",
    // },
    // {
    //     id: '10',
    //     image_url: "https://imagemaster.fraazo.com/fraazo-master/products/VBRI22.png?width=256&height=256",
    //     name: "Black Nagpur Brinjal",
    //     quantity: "250 g",
    //     price: "40",
    // },
];

var bestdeal = [
    {
        id: '1',
        image_url: "https://m.media-amazon.com/images/I/61THuQWrAZL._SL1200_.jpg",
        name: "Coconut Combo (2 pcs Coconuts)",
        quantity: "1 combo",
        price: "60",
    },
    {
        id: '2',
        image_url: "https://www.bhg.com/thmb/5cz7VLOcihn4-htu6tJUVmd_FtY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/HGL100647-773e4b92753344f2b4c89f551de5d87b.jpg",
        name: "Cabbage",
        quantity: "1 pc",
        price: "41",
    },
    {
        id: '3',
        image_url: "https://www.jiomart.com/images/product/600x600/590000508/raw-papaya-500-g-product-images-o590000508-p590000508-0-202207291755.jpg",
        name: "Raw Papaya",
        quantity: "1 pc",
        price: "32",
    },
    {
        id: '4',
        image_url: "https://khalihaan.s3.ap-south-1.amazonaws.com/product/3517/uhoiFaGmOytLdmqx4Rahl81KmEasSUiHdfyknfYE.png",
        name: "Black Nagpur Brinjal",
        quantity: "250 g",
        price: "40",
    },
    {
        id: '5',
        image_url: "https://www.jiomart.com/images/product/original/590003662/green-capsicum-500-g-product-images-o590003662-p590003662-0-202203151617.jpg",
        name: "Green Capsicum",
        quantity: "250 g",
        price: "32",
    },
];

var carousel = [
    {
        image_url : "https://bhajibazar.com/wp-content/uploads/2018/08/slider1.jpg"
    },
    {
        image_url : "https://www.finefruitscatering.co.uk/Images/fresh-fruit-veg-banner.png"
    },
    {
        image_url : "https://www.grocistore.com/admin/uploads/banners/web_banners/banner1576516931.JPG"
    },
];

// Header Section
function signup(){
    window.location.href = "signup.html";
}
function login(){
    window.location.href = "login.html";
}

document.getElementById("cartt").addEventListener("click", gotoLogin);
document.getElementById("cartt2").addEventListener("click", gotoLogin);
document.getElementById("credit").addEventListener("click", gotoLogin);
document.getElementById("credit2").addEventListener("click", gotoLogin);
function gotoLogin(){
    alert("Please Sign Up or Log In !");
    window.location.href = "signup.html";
}

// var loggedInUser = JSON.parse(localStorage.getItem("userName")) || [];
// console.log(loggedInUser);
// if(!loggedInUser.length==0){
//     document.getElementById("userlogo").style.display="block"
//     document.getElementById("user").innerText =loggedInUser[0].name;
//     document.getElementById("signup").style.display = "none";
//     document.getElementById("login").style.display = "none";
// }

// Carousel Section
carousel.map(function(element){
    var div = document.createElement("div");
    div.setAttribute("class", "item");

    var image = document.createElement("img");
    image.setAttribute("src", element.image_url);

    div.append(image);
    document.getElementById("carousel").append(div);
});
// Best Deal Section
bestdeal.map(function(element, index){
       var div = document.createElement("div");

        var image = document.createElement("img");
        image.setAttribute("src", element.image_url);
        image.setAttribute("alt", index);

        var p = document.createElement("p");
        p.innerText = element.name;

        var quantity = document.createElement("p");
        quantity.innerText = element.quantity;

        var price = document.createElement("h4");
        price.innerText = "₹ "+ element.price;

        var btn = document.createElement("button");
        btn.innerText = "Add";
        btn.addEventListener("click", function(){
            addToCart(index);
            alert("Item has added to Cart!");
            increaseCartValue();
        });

        div.append(image, p, quantity, price,btn);
        document.getElementById("bestdeal").append(div);
});

//Fruits Section
fruits.map(function(element, index){
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
        btn.innerText = "Add";
        btn.addEventListener("click", function(){
            addToCart(index);
            alert("Item has added to Cart!");
            increaseCartValue();
        });

        div.append(image, p, quantity, price,btn);
        document.getElementById("fruits").append(div);
});
// Vegetables Section
vegetables.map(function(element, index){
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
        btn.innerText = "Add";
        btn.addEventListener("click", function(){
            addToCart(index);
            alert("Item has added to Cart!");
            increaseCartValue();
        });

        div.append(image, p, quantity, price,btn);
        document.getElementById("vegetables").append(div);
});

var cartProduct = JSON.parse(localStorage.getItem("cart")) || [];
// var valueCart = [];
function addToCart(index){
    var product = bestdeal.filter(function(element, ind){
        return ind == index;
    });
    cartProduct.push(product[0]);
    localStorage.setItem("cart", JSON.stringify(cartProduct));
}

// console.log("okay");

document.getElementById("valueCart").innerText = cartProduct.length;
function increaseCartValue(){
    document.getElementById("valueCart").innerText = cartProduct.length;
}



