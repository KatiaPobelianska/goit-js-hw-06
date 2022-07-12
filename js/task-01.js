"use strict";

// ====1
// const totalCategories = document.querySelectorAll("ul>.item");

// console.log(totalCategories);

// console.log(`Number of categories: ${totalCategories.length}`);

// const categoriesArray = [...totalCategories]
//   .map(
//     (categories) => `Category: ${categories.children[0].textContent}
//     Elements: ${categories.children[1].children.length}`
//   )
//   .join(", ");
// console.log(categoriesArray);

// ====2
const list = document.querySelectorAll("li.item");

console.log(`Number of categories: ${list.length}`);

const ul = document.querySelectorAll("#categories>li");
ul.forEach((el) => {
  console.log(
    `Category: ${el.firstElementChild.textContent}, Elements: ${el.lastElementChild.children.length}`
  );
});
