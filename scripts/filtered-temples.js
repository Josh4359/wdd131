// hamburger menu

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// album

const album = document.querySelector('#album');

const b_home = document.querySelector('#home');
const b_old = document.querySelector('#old');
const b_new = document.querySelector('#new');
const b_large = document.querySelector('#large');
const b_small = document.querySelector('#small');

const c_home = (temple) => true;
const c_old = (temple) => {
	const date = parseInt(temple.dedicated.split(", ")[0]);
	return date < 1900;
}
const c_new = (temple) => {
	const date = parseInt(temple.dedicated.split(", ")[0]);
	return date > 2000;
}
const c_large = (temple) => temple.area > 90000;
const c_small = (temple) => temple.area < 10000;

b_home.addEventListener('click', () => updateAlbum(c_home));
b_old.addEventListener('click', () => updateAlbum(c_old));
b_new.addEventListener('click', () => updateAlbum(c_new));
b_large.addEventListener('click', () => updateAlbum(c_large));
b_small.addEventListener('click', () => updateAlbum(c_small));

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California",
    dedicated: " 1993, April, 25",
    area: 72000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"
  },
  {
    templeName: "Los Angeles California",
    location: "Los Angeles, California",
    dedicated: "1956, March, 11",
    area: 190614,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/los-angeles-california/400x250/los-angeles-california-temple-1079458-wallpaper.jpg"
  }
];

updateAlbum(c_home);

function updateAlbum(condition) {
	album.innerHTML = "";

	for (let i = 0; i < temples.length; i++) {
		const temple = temples[i];
		if (!condition(temple)) continue;

		album.innerHTML += 
	`<figure>
		<figcaption>
			${temple.templeName}
		</figcaption>
		<div>
			<div class="fig-stat"><p class="stat-key">Location:</p><p>${temple.location}</p></div>
			<div class="fig-stat"><p class="stat-key">Dedicated:</p><p>${temple.dedicated}</p></div>
			<div class="fig-stat"><p class="stat-key">Size:</p><p>${temple.area} sq ft</p></div>
		</div>
		<img src="${temple.imageUrl}" alt="${temple.templeName}" width="400" height="250">
	</figure>`;
	}
}