const addToArray = function () {
  array.push(input.value);
  input.value = '';
};
const addToDropdown = function () {
  array.forEach(
    (element) =>
      (dropDown.innerHTML += `<option value="${element}">${element}</option>`)
  );
};
const array = [];
const input = document.getElementById('input');
const dropDown = document.getElementById('dropdown');
