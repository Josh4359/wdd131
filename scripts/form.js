// product array

const product_name = document.querySelector('#product_name');

const products = [
  {
    id: 'fc-1888',
    name: 'flux capacitor',
    averagerating: 4.5
  },
  {
    id: 'fc-2050',
    name: 'power laces',
    averagerating: 4.7
  },
  {
    id: 'fs-1987',
    name: 'time circuits',
    averagerating: 3.5
  },
  {
    id: 'ac-2000',
    name: 'low voltage reactor',
    averagerating: 3.9
  },
  {
    id: 'jj-1969',
    name: 'warp equalizer',
    averagerating: 5.0
  }
];

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    
    product_name.innerHTML += `<option value="${product.id}">${product.name}</option>`
}

// rating

const stars = document.querySelectorAll('input[name="rating"]');

let rating = -1;

const ratings = ['one_star', 'two_star', 'three_star', 'four_star', 'five_star'];

let i = 0;
stars.forEach(radio => {
    const index = i;
    radio.addEventListener('change', (event) => {
        rating = index;
        for (let i = 0; i < stars.length; i++) {
            const label = document.querySelector(`label[for="${ratings[i]}"]`)
            const active = i <= index;
            label.style.color = active ? 'gold' : 'white';
        }
    });
    i++;
})

// submit

const submit_tracker = document.querySelector('#submit-tracker')

let review_count = Number(window.localStorage.getItem('review-count'));

submit_tracker.textContent = `You've posted ${review_count} reviews!`;

document.querySelector('form').addEventListener('submit', function(event) {
    review_count++;
    window.localStorage.setItem('review-count', review_count);
});