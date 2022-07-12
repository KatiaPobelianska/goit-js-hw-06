"use strict";

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// ====1

// for(let el of images) document.querySelector('.gallery').insertAdjacentHTML('beforeEnd', `<li><img src="${el.url}" alt="${el.alt}" width="250" height="150" /></li>`);

// console.log(images);

// ====2 insertAdjacentHTML()

const ulEl = document.querySelector(".gallery");

images.forEach((image) => {
  ulEl.insertAdjacentHTML(
    "afterbegin",
    `<li><img src="${image.url}" alt="${image.alt}" width="250" height="150" /></li>`
  );
  console.log(images);
});

ulEl.setAttribute(
  "style",
  "list-style:none; display: inline-flex; flex-direction: column;"
);
