// search

let search = (product) => true

document.getElementById("search").addEventListener("keyup", function() {
    let query = this.value.toLowerCase();
    search = (product) => query.length === 0
        || product.name.toLowerCase().includes(query);

    updateProducts();
});

const sortName = (a, b) => a.name.localeCompare(b.name);
const sortDate = (a, b) => b.date - a.date;
const sortDateReverse = (a, b) => -sortDate(a, b);
const sortPrice = (a, b) => a.price - b.price;
const sortPriceReverse = (a, b) => -sortPrice(a, b);

let sort = sortName;

document.getElementById("search-sort").addEventListener("change", function() {
    let query = this.value;
    if (query === "name")
        sort = sortName;
    else if (query === "date")
        sort = sortDate;
    else if (query === "date-reverse")
        sort = sortDateReverse;
    else if (query === "price")
        sort = sortPrice;
    else if (query === "price-reverse")
        sort = sortPriceReverse;

    updateProducts();
});

const conditionAll = (product) => true;
const conditionNew = (product) => product.condition.toLowerCase() === "new";
const conditionRefurbished = (product) => product.condition.toLowerCase() === "refurbished";
const conditionUsed = (product) => product.condition.toLowerCase() === "used";
const conditionBroken = (product) => product.condition.toLowerCase() === "for parts";

let condition = conditionAll;

document.getElementById("search-condition").addEventListener("change", function() {
    let query = this.value;
    if (query === "all")
        condition = conditionAll;
    else if (query === "new")
        condition = conditionNew;
    else if (query === "refurbished")
        condition = conditionRefurbished;
    else if (query === "used")
        condition = conditionUsed;
    else if (query === "broken")
        condition = conditionBroken;

    updateProducts();
});

// products

const productList = document.querySelector('#product-list');

updateProducts();

function updateProducts() {
    const filteredProducts =
        window.products.filter(x => !window.IsInCart(window.products.indexOf(x)))
        .filter(x => !window.IsPurchased(window.products.indexOf(x)))
        .filter(search).filter(condition).sort(sort);

    if (filteredProducts.length > 0)
    {
        productList.innerHTML = "";
        for (let i = 0; i < filteredProducts.length; i++) {
            const product = filteredProducts[i];

            productList.innerHTML +=
`<a class="product-card" href="product.html?productid=${window.products.indexOf(product)}">
    <img src="${product.image}" alt="${product.name}" loading="lazy" width="${product.width}" height="${product.height}">
    <div class="product-info">
        <div class="product-title">${product.name}</div>
        <div class="product-price">$${product.price.toFixed(2)}</div>
        <div class="product-condition">${product.condition}</div>
        <div class="product-age">${window.timeAgo(product.date)}</div>
    </div>
</a>`;
	    }
    } else
        productList.innerHTML = '<div class="no-products">No products found. Looking for <a href="cart.html">My Cart</a>?</div>';
}