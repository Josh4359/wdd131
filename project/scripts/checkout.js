document.querySelectorAll(".number-input").forEach(element =>
    element.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, "");
    })
);

document.querySelector("#card-number").addEventListener("input", function() {
    this.value = this.value.match(/.{1,4}/g)?.join(" ") || this.value;
});

const table = document.querySelector('.cart').querySelector('tbody');

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const items = JSON.parse(decodeURIComponent(params.get("items")));

window.PopulateTable(table, items);

const form = document.querySelector('#checkout-form').querySelector('form');
form.action = `review.html${queryString}`;

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const formParams = new URLSearchParams(new FormData(this));
    window.location.href = `review.html?${params.toString()}&${formParams.toString()}`;
});