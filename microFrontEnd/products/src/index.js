import { faker } from "@faker-js/faker";
let products = "";

for (let i = 0; i < 2; i++) {
  products += `<div>${faker.commerce.productName()}</div>`;
}

document.querySelector("#app-products").innerHTML = products;
