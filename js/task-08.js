"use strict";

const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Заполни форму!");
    return;
  }
  console.log({
    email: `${email.value}`,
    password: `${password.value}`,
  });
  form.reset();
});
