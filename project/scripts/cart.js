const table = document.querySelector('#cart').querySelector('tbody');
const array = window.GetCart();
window.PopulateTable(table, array);

const table1 = document.querySelector('#purchase-history').querySelector('tbody');
const array1 = window.GetPurchases();
window.PopulateTable(table1, array1);

const checkoutButton = document.querySelector('#checkout-button');
if (array.length > 0)
    checkoutButton.href = `checkout.html?items=${encodeURIComponent(JSON.stringify(array))}`;
else
    checkoutButton.classList.add('disabled');

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    window.Reset();
    window.location.reload();
});