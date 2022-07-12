"use strict";

const refs = {
  body: document.body,
  spanColor: document.querySelector(".color"),
  btnChange: document.querySelector(".change-color"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.btnChange.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.spanColor.textContent = color;
});
