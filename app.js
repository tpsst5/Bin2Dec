// Listen for submit
document.getElementById('calculate-form').addEventListener('submit',
  function (e) {
    // Calculate results
    calculateDecimal();

    e.preventDefault();
  });

// Binary input var
const binaryInput = document.getElementById('binary');

// Decimal output var
const decimalResult = document.getElementById('decimal-output-display');

// Calculate/convert to decimal number
function calculateDecimal() {
  // Vars for input and output
  let binaryNum = binaryInput.value;
  const exponentNum = binaryNum.length - 1;
  let decimalNum = 0;

  // Check if nums entered contain invalid nums
  if (binaryNum.match(/[2-9]/g)) {
    alert('Please enter either 1 or 0');
  }

  // Convert binary input to decimal
  for (let i = 0; i < binaryNum.length; i++) {
    decimalNum += parseInt(binaryNum[i]) * Math.pow(2, exponentNum - i);
  }

  decimalResult.value = decimalNum;
}