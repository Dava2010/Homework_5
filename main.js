import {
  add as sum,
  subtract as diff,
  multiply as prod,
  divide as quot,
} from "./modules/calc.js";

document.getElementById("add").addEventListener("click", () => calculate(sum));
document
  .getElementById("subtract")
  .addEventListener("click", () => calculate(diff));
document
  .getElementById("multiply")
  .addEventListener("click", () => calculate(prod));
document
  .getElementById("divide")
  .addEventListener("click", () => calculate(quot));

function calculate(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultContainer = document.getElementById("result-container");

  if (isNaN(num1) || isNaN(num2)) {
    resultContainer.innerHTML = `<span style="color: red;">Введите числа!</span>`;
    return;
  }

  resultContainer.innerHTML = `<span style="color: yellow;">Result: ${operation(
    num1,
    num2
  )}</span>`;
}
