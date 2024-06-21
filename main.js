let display = document.getElementById("display");
let currentInput = "";
let previousInput = "";
let operator = null;

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operator = null;
  display.textContent = "0";
}

function appendNumber(number) {
  if (currentInput.includes(".") && number === ".") return;
  currentInput = currentInput.toString() + number.toString();
  display.textContent = currentInput;
}

function appendOperator(op) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "";
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "×":
      result = prev * current;
      break;
    case "÷":
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result;
  operator = null;
  previousInput = "";
  display.textContent = result;
}
