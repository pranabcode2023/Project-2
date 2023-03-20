
const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
console.log('urlParams :>> ', urlParams.get("name"));
const name = urlParams.get("name");
const email = urlParams.get("email");
const message = urlParams.get("message");

console.log('name, message, email :>> ', name, message, email);

const container = document.getElementById("container");
const h1 = document.createElement("h1");
h1.innerText = name

container.appendChild(h1)