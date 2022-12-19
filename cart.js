function addProduct(product){
    let cart = localStorage.getItem("cart");
    if(!cart){
        cart = [product];
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    else{
        cart = JSON.parse(cart);
        let added = false;
        cart.forEach(c => {
            if(c.name === product.name){
                c.quantity = parseInt(c.quantity) + parseInt(product.quantity);
                added = true;
            }
        })
        if(!added){
            cart.push(product);
        }
        localStorage.setItem("cart",JSON.stringify(cart));
    }

    showCartPopup(cart);
}

function removeProduct(product){
    let cart = localStorage.getItem("cart");
    cart = JSON.parse(cart);
    cart.forEach((c, i) => {
        console.log(c.name, product)
        if(c.name === product){
            cart.splice(i, 1);
        }
    })
    localStorage.setItem("cart",JSON.stringify(cart));
    location.reload()
}

function showCartPopup(cart){
    const cartPopupWrapper = document.querySelector(".cartPopupWrapper");
    cartPopupWrapper.innerHTML = "";
    cartPopup = document.createElement('div');
    cartPopup.classList.add("cartPopup");
    cartPopup.innerHTML = `<p>Item has been added to your cart</p>`;

    cartPopup.innerHTML += `<div class="products-list-popup">`;
    for(let i = 0 ; i < cart.length ; i++){
        cartPopup.innerHTML += `<div class="product-popup"><img src="${cart[i].image}"/><div>${cart[i].name}<br>Quantity: ${cart[i].quantity}<br>Price: ${cart[i].price}`
    }
    cartPopup.innerHTML += `</div><button><a href="cart.html">View Cart</a></button>`;
    cartPopupWrapper.append(cartPopup);
}



