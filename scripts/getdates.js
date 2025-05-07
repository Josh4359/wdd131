const currentyear = document.querySelector("#currentyear");
currentyear.innerHTML = new Date(document.lastModified).getFullYear();

const lastModified = document.querySelector("#lastModified");
const format = new Intl.DateTimeFormat("en-US", {dateStyle: "medium" });
lastModified.innerHTML = `Last modified: ${format.format(new Date())}`;