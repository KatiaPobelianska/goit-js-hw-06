"use strict";

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//  подставляет его текущее значение в span#name-output. Если инпут пустой,
//  в спане должна отображаться строка 'незнакомец'.
/* <input type="text" placeholder="Ваше имя?" id="name-input" />
    <h1>Привет, <span id="name-output">незнакомец</span>!</h1> */
// ====1

let input = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

input.oninput = function () {
  if (input.value === "") {
    nameOutput.innerHTML = "Anonymous";
  } else {
    nameOutput.innerHTML = input.value;
  }
};

// ====2

// const inputName = document.querySelector("#name-input");
// const outputName = document.querySelector("#name-output");
// let newName = "Anonymous";

// const addNewName = (ev) => {
//   if (ev.currentTarget.value === "") {
//     outputName = "Anonymous";
//   } else {
//     outputName.textContent = ev.currentTarget.value;
//   }
// };
// inputName.addEventListener("keydown", addNewName);
