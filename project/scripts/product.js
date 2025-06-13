const params = new URLSearchParams(window.location.search);
const productid = params.get("productid");
const product = window.products[productid];

const productName = document.querySelector('#product-name');
productName.textContent = product.name;

const productImage = document.querySelector('#product-image');
productImage.innerHTML = `<img src="${product.image}" alt="${product.name}" width="${product.width}" height="${product.height}">`;

const productStats = document.querySelector('#product-stats');
let ul = '';
product.specs.forEach(element => {
    ul += `<li>${element}</li>`;
});
productStats.innerHTML =
`<div class="product-stat" id="price">Price: <div>$${product.price.toFixed(2)}</div></div>
<div class="product-stat" id="age">Listed <div>${timeAgo(product.date)}</div></div>
<div class="product-stat" id="delivery">est. <div>${product.delivery}</div> delivery</div>
<div class="product-stat" id="condition">Condition: <div>${product.condition}</div></div>
<div class="product-stat" id="desc">Description: <div>${product.description}</div></div>
<div class="product-stat" id="specs">Specifications: <div><ul>${ul}</ul></div></div>`;

const buyButton = document.querySelector('#buy');
buyButton.href = `checkout.html?items=${encodeURIComponent(JSON.stringify([productid]))}`;

const cartButton = document.querySelector('#cart');
cartButton.addEventListener('click', () => {
    if (window.IsInCart(productid)) {
        window.RemoveFromCart(productid);
        UpdateCartButton();
    }
    else {
        window.AddToCart(productid);
        UpdateCartButton();
    }
});

UpdateCartButton();

function UpdateCartButton() {
    if (IsInCart(productid)) {
        cartButton.textContent = "Remove from Cart";
    }
    else {
        cartButton.textContent = "Add to Cart";
    }
}

const productButtons = document.querySelector('#product-buttons');
if (window.IsPurchased(productid)) {
    console.log("purchased");
    productButtons.style.display = "none";
}