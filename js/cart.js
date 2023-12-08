let ProductsInCart = localStorage.getItem("ProductsInCart");
let allproducts = document.querySelector(".products");
if(ProductsInCart){
let item =JSON.parse(ProductsInCart);
drawCartProducts(item);
}

function drawCartProducts(products){
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
         <button class="add_to_cart" onclick="RemovefromCart(${item.id})">Remove from Cart</button>
        </div>
        </div>
        `
})
allproducts.innerHTML= y;
}

// if(ProductsInCart == -1){
//     let item =JSON.parse(ProductsInCart);
//     drawCartProducts(item);
//     }
    
