"use strict";

const container = document.querySelector(".container");
const btnChange = document.querySelector(".change");
const btnReset = document.querySelector(".reset");

const generateGrid = function (size = 16) {
  container.setAttribute(
    "style",
    `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`
  );
  for (let i = 0; i < size * size; i++) {
    const element = document.createElement("div");
    element.classList.add("element");
    container.appendChild(element);
    element.addEventListener("mouseover", function () {
      element.style.backgroundColor = "#000";
    });
  }
};

generateGrid();

btnChange.addEventListener("click", function () {
  container.innerHTML = "";
  const size = prompt("Enter the size for your grid");
  generateGrid(size);
});

btnReset.addEventListener("click", function () {
  const elements = document.querySelectorAll(".element");
  elements.forEach((el) => (el.style.backgroundColor = "#fff"));
});
