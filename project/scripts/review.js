const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const items = JSON.parse(decodeURIComponent(params.get("items")));

window.AddPurchases(items);