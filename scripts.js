const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Collect form data
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Convert inputs to numbers
  const numDividend = parseFloat(dividend);
  const numDivider = parseFloat(divider);

  // Validate that both inputs are provided and not empty
  if (dividend === "" || divider === "") {
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
    return;
  }

  // Validate that both inputs are numbers and not NaN
  if (isNaN(numDividend) || isNaN(numDivider)) {
    result.classList.add("critical-error");
    result.innerText = "Something critical went wrong. Please reload the page.";
    console.error("Invalid inputs: ", new Error().stack);
    return;
  }

  // Validate for division by zero
  if (numDivider === 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again.";
    console.error("Division by zero error: ", new Error().stack);
    return;
  }

  // Calculate the result
  const divisionResult = Math.floor(numDividend / numDivider);

  // Display the result
  result.innerText = divisionResult;
});
