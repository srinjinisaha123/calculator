const display = document.getElementById("display");
let currentInput = "";
let resetNext = false;

function press(val) {
  if (val === "C") {
    currentInput = "";
    display.textContent = "0";
    return;
  }

  if (val === "back") {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || "0";
    return;
  }

  if (val === "=") {
    try {
      currentInput = eval(currentInput).toString();
      display.textContent = currentInput;
      resetNext = true;
    } catch {
      display.textContent = "Error";
      currentInput = "";
    }
    return;
  }

  if (resetNext) {
    currentInput = "";
    resetNext = false;
  }

  currentInput += val;
  display.textContent = currentInput;
  console.log("calculator")
}
