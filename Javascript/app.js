const showOperators = document.getElementById('show-operators');
const input = document.getElementById('input');
const currShowOperatorsDisplay = showOperators.style.display;

////////////To set display for operators
function toggleDisplay() {
  currShowOperatorsDisplay !== 'block'
    ? (showOperators.style.display = 'block')
    : (showOperators.style.display = 'none');

  showOperators.innerHTML = '';
}

function createOperator(value) {
  toggleDisplay();

  const operator =
    value == '+'
      ? 'plus'
      : value == '-'
      ? 'minus'
      : value == '*'
      ? 'multiply'
      : 'percentage';

  for (let i = 1; i <= Number(input.value); i++) {
    // showOperators.innerHTML += `<span class="icon" id="icon-${i}" onclick="calcOperation(this.id, '${operator}')">${operator}</span>`;

    showOperators.innerHTML += `<img src="${operator}.png" id="icon-${i}"onclick="calcOperation(this.id, '${operator}')" alt="${operator}">`;
  }
}

function calcOperation(id, operator) {
  let inputVal = Number(input.value);
  let idNumber = Number(id.slice(5));

  if (operator == 'plus') {
    input.value = inputVal + idNumber;
  } else if (operator == 'minus') {
    input.value = inputVal - idNumber;
  } else if (operator == 'multiply') {
    input.value = inputVal * idNumber;
  } else {
    input.value = inputVal % idNumber;
  }

  toggleDisplay();
}
