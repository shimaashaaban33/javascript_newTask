// localStorage.setItem("firstproduct","BMW")
// console.log(localStorage.getItem("firstproduct"))
// localStorage.setItem("student1","salwa")
// localStorage.removeItem("student1")

// localStorage.setItem("st2","bella")
// localStorage.setItem("st3","salah")
// localStorage.clear()
/////////////////////////////////////////////////


let userInfo = document.querySelector("#user_info")

let userData = document.querySelector("#user")

let links = document.querySelector("#links")

if(localStorage.getItem("username")){
    links.remove()
    userInfo.style.display = "flex"
    userData.innerHTML = localStorage.getItem("username")
}
let logOutBtn = document.querySelector("#logout");
logOutBtn.addEventListener('click',function(){
localStorage.clear();
setTimeout(()=>{
    window.location = "login.html";
},1500)
});
//---------------------------------------------------------------
let allproducts = document.querySelector(".products");
let products = 
[
    {
        id:1,
        title:"SamSung A24",
        color:"black",
        imageUrl:"images/samsunga24.jpg",
        desc:"The New mobile from SamSung"

    },
    {
        id:2,
        title:"Black Smart watch",
        color:"black",
        imageUrl:"images/Smartwatch.jpg",
        desc:"The New Smart watch for women"

    },
    {
        id:3,
        title:"SamSung A23",
        color:"pink",
        imageUrl:"images/a23.jpg",
        desc:"The New mobile from SamSung"

    },
    {
        id:4,
        title:"Pink Smart watch",
        color:"pink",
        imageUrl:"images/Smartwatch2.jpg",
        desc:"The New Smart watch for women"

    },
]
function drawItems(){
    products.innerHTML="";
    let y = products.map((item)=>{
        return `
        <div class="product_item">
                <img class="product_item_img" src="${item.imageUrl}" alt="">
                <div class="product_item_desc">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                    <span>${item.color}</span>
                </div>
                <div class="product_item_action">
                    <button class="add_to_cart" onclick="addToCart(${item.id})">Add To Cart</button>
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
        `
    })
    allproducts.innerHTML=y;
}
drawItems();
let badge = document.querySelector(".badge");
let cartProductDiv = document.querySelector(".carts_products div");

//let addedItem = [];
let addedItem = localStorage.getItem("ProductsInCart")? JSON.parse(localStorage.getItem("ProductsInCart")) : [];
if(addedItem){
    addedItem.map((item)=>{
        cartProductDiv.innerHTML +=  `<p>${item.title}</p>`;
        badge.style.display="block";
        badge.innerHTML= addedItem.length;
    })
}
//function check(){
    if(localStorage.getItem=("username")){
        function addToCart(id){
            let choosenItem = products.find((item => item.id === id));
            cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`;
            addedItem = [...addedItem,choosenItem];
            localStorage.setItem("ProductsInCart",JSON.stringify(addedItem));
            let cartProductsLength = document.querySelectorAll(".carts_products div p");
            //console.log(cartProductsLength);
            badge.style.display = "block";
            badge.innerHTML= cartProductsLength.length;
            }
            
    }
    else{
        window.location="login.html";
    }
//}

// function addToCart(id){
// let choosenItem = products.find((item => item.id === id));
// cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`;
// let cartProductsLength = document.querySelectorAll(".carts_products div p");
// //console.log(cartProductsLength);
// badge.style.display = "block";
// badge.innerHTML= cartProductsLength.length;
// }


let shoppingCartIcon = document.querySelector(".shopping_cart");
let cartProducts = document.querySelector(".carts_products");
shoppingCartIcon.addEventListener("click", opencart)
function opencart(){
    if(cartProductDiv.innerHTML!=""){
        if(cartProducts.style.display=="block"){
            cartProducts.style.display="none";
        }else{
            cartProducts.style.display="block";
        }
    }
}

function RemovefromCart(id){
    let choosenItem = products.find((item => item.id === id));
     if(choosenItem !== -1){
        products.splice(choosenItem,1)
        drawCartProducts(products);
        badge.style.display = "block";
        badge.innerHTML= cartProductsLength.length;
     }
}