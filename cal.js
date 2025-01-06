function appendNumber(number) {
  document.getElementById('display').value += number;
}
function appendOperator(operator) {
  document.getElementById('display').value += operator;
}
function clearDisplay() {
  document.getElementById('display').value = '';
}
function calculateResult() {
  const display = document.getElementById('display');
  display.value = eval(display.value);
}
function deleteLast() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}