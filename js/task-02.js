"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// ====1 for of()

// const buildIngredients = () => {
//   const allIngredients = document.querySelector("ul#ingredients");
//   for (const ingredient of ingredients) {
//     const createIngredient = document.createElement("li");
//     createIngredient.classList.add('item');
//     createIngredient.textContent = ingredient;
//     allIngredients.appendChild(createIngredient);
//   }
//   console.log(allIngredients);
// };
// buildIngredients();

// ====2 reduce()

// const ulEl = document.querySelector('#ingredients');

// const liEl = ingredients.reduce((str, item) => str + `<li class="item">${item}</li>`, '');
// ulEl.innerHTML = liEl;
// console.log(liEl);

// ====3 map()

const ulEl = document.querySelector("#ingredients");

const listAllIngredients = ingredients.map((ingredient) => {
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  listEl.textContent = ingredient;

  return listEl;
});
console.log(listAllIngredients);

ulEl.append(...listAllIngredients);
