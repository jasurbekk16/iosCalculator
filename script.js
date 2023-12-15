let currentInput = '0';
let operation = '';

function appendNumber(number) {
  if (currentInput === '0') {
    currentInput = ''; // 0 ni o'chirib tashlaymiz
  }
  currentInput += number;
  document.getElementById('result').value = currentInput;
}

function performOperation(operator) {
  operation = operator;
  currentInput += operation;
  document.getElementById('result').value = currentInput;
}
function deleteNumber() {
  currentInput = currentInput.slice(0, -1);
  if (currentInput === '') {
    currentInput = '0';
  }
  document.getElementById('result').value = currentInput;
}

function calculateResult() {
  const operands = currentInput.split(operation);
  let result = 0;
  const num1 = parseFloat(operands[0]);
  const num2 = parseFloat(operands[1]);

  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }

  document.getElementById('result').value = result;
}

function clearResult() {
  currentInput = '0'; // Qiymatni qayta 0 ga o'zgartiramiz
  document.getElementById('result').value = currentInput;
}

// Klaviatura tugmalarini eshitish
document.addEventListener('keydown', function(event) {
  const key = event.key;

  if (!isNaN(key) || key === '.') {
    appendNumber(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    performOperation(key);
  } else if (key === 'Enter') {
    calculateResult();
  } else if (key === 'Escape') {
    clearResult();
  }
});
