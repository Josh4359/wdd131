// cart

let cart = JSON.parse(localStorage.getItem("cart")) || [];

window.GetCart = () => cart.map(x => x);

window.AddToCart = function(item)
{
  cart = cart.filter(x => x !== item); // ensure there are no duplicates
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
}

window.RemoveFromCart = function(item)
{
  cart = cart.filter(x => x !== item);
  localStorage.setItem("cart", JSON.stringify(cart));
}

window.IsInCart = (item) => cart.includes(String(item));

// purchases

let purchases = JSON.parse(localStorage.getItem("purchases")) || [];

window.GetPurchases = () => purchases.map(x => x);

window.AddPurchases = function(value) {
  purchases = [...purchases, ...value];
  purchases = purchases.filter((item, index) => purchases.indexOf(item) === index);
  localStorage.setItem("purchases", JSON.stringify(purchases));

  cart = cart.filter(x => !IsPurchased(x));
  localStorage.setItem("cart", JSON.stringify(cart));
}

window.IsPurchased = (item) => purchases.includes(String(item));

// reset

window.Reset = function() {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));

  purchases = [];
  localStorage.setItem("purchases", JSON.stringify(purchases));
}

// products

window.products = [
  {
    name: "Half-eaten Cheeseburger",
    description: "I got full half way through my cheeseburger. Anyone want it?",
    specs: [
        "meat",
        "lettuce",
        "cheese",
        "tomato",
        "onion"
    ],
    price: 10,
    date: new Date("2025-03-04T02:24:00"),
    delivery: "3 week",
    condition: "used",
    image: "images/half-eaten-cheeseburger-ai.webp",
    width: 1024,
    height: 1024,
  },
  {
    name: "Empty Pizza Box",
    description: "Empty pizza box with stray toppings",
    specs: [
        "cardboard",
        "pepperoni",
        "olives"
    ],
    price: 4,
    date: new Date("2025-05-19T06:41:00"),
    delivery: "2 day",
    condition: "for parts",
    image: "images/empty-pizza-box-ai.webp",
    width: 1024,
    height: 1024
  },
  {
    name: "Refolded Burrito",
    description: "I dropped my burrito, and it fell apart, so I tried my best to put it back together. Enjoy!",
    specs: [
        "rice",
        "chicken",
        "tomatoes"
    ],
    price: 16,
    date: new Date("2025-06-11T07:23:00"),
    delivery: "7 day",
    condition: "refurbished",
    image: "images/refolded-burrito-ai.webp",
    width: 1024,
    height: 1024
  },
  {
    name: "Picked Onions",
    description: "I asked for no onions. They gave me onions. I hate onions.",
    specs: [
        "onions",
        "onions",
        "onions"
    ],
    price: 2,
    date: new Date("2025-06-04T07:23:00"),
    delivery: "4 day",
    condition: "for parts",
    image: "images/picked-onions-ai.webp",
    width: 1024,
    height: 1024
  }
]

window.PopulateTable = function(table, array) {
    let total = 0;
    if (array.length > 0)
        array.forEach(element => {
            const product = window.products[Number(element)];

            table.innerHTML +=
    `<tr class="cart-item">
        <td><img src="${product.image}" alt="${product.name}" width="${product.width}" height="${product.height}"></td>
        <td>
            <a href="product.html?productid=${window.products.indexOf(product)}">
                ${product.name}
            </a>
        </td>
        <td>$${product.price.toFixed(2)}</td>
    </tr>`;

            total += product.price;
        });
    else {
        table.innerHTML =
    `<tr class="cart-item">
        <td></td>
        <td>
            Your cart is empty!
        </td>
        <td></td>
    </tr>`;
    }

    table.innerHTML +=
    `<tr id="cart-total">
        <td></td>
        <td>Total</td>
        <td>$${total.toFixed(2)}</td>
    </tr>`;
}

window.timeAgo = function(date) {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    
    const intervals = [
        { label: "year", seconds: 31536000 },
        { label: "month", seconds: 2592000 },
        { label: "week", seconds: 604800 },
        { label: "day", seconds: 86400 },
        { label: "hour", seconds: 3600 },
        { label: "minute", seconds: 60 },
        { label: "second", seconds: 1 }
    ];
    
    for (let interval of intervals) {
        const count = Math.floor(seconds / interval.seconds);
        if (count >= 1) {
            return `about ${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
        }
    }
    return "just now";
}