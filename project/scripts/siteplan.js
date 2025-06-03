const wireframe_fullscreen = document.querySelector('.wireframe-fullscreen');

const b_wire_home_desktop = document.querySelector('#wire_home_desktop');
const b_wire_home_mobile = document.querySelector('#wire_home_mobile');
const b_wire_product_desktop = document.querySelector('#wire_product_desktop');
const b_wire_product_mobile = document.querySelector('#wire_product_mobile');

const img_wire_home_desktop = {
    name: "Home Page (Desktop)",
    path: "images/wire_home_desktop.png",
    width: 972,
    height: 668
};
const img_wire_home_mobile = {
    name: "Home Page (Mobile)",
    path: "images/wire_home_mobile.png",
    width: 292,
    height: 724
};
const img_wire_product_desktop = {
    name: "Product Page (Desktop)",
    path: "images/wire_product_desktop.png",
    width: 966,
    height: 660
};
const img_wire_product_mobile = {
    name: "Product Page (Mobile)",
    path: "images/wire_product_mobile.png",
    width: 293,
    height: 784
};

wireframe_fullscreen.addEventListener('click', (event) => {if (event.target === wireframe_fullscreen) closeWireframe()});

b_wire_home_desktop.addEventListener('click', () => updateWireframe(img_wire_home_desktop));
b_wire_home_mobile.addEventListener('click', () => updateWireframe(img_wire_home_mobile));
b_wire_product_desktop.addEventListener('click', () => updateWireframe(img_wire_product_desktop));
b_wire_product_mobile.addEventListener('click', () => updateWireframe(img_wire_product_mobile));

function closeWireframe() {
    wireframe_fullscreen.style.display = "None";
}

function updateWireframe(image) {
    wireframe_fullscreen.innerHTML =
`<figure>
    <img src="${image.path}" alt="${image.name}" width="${image.width}" height="${image.height}">
    <figcaption>${image.name}</figcaption>
</figure>`
    wireframe_fullscreen.style.display = "Flex";
}