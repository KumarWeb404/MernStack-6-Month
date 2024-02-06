'strict mode';

const movie = [1, 9, 2, 0];
const movie2 = ['b', 'a', 't', 'm', 'a', 'n'];

let currIndex, selectedInput, input, currImage, changeImage, nextInput;

///////////Initialize
function initialise(inputId) {
  //slice manually to obtain the input number
  currIndex = Number(inputId.slice(6));
  //select the input
  selectedInput = document.getElementById(inputId);

  //get the input value
  input = selectedInput.value;
  //get the current Image
  currImage = document.getElementById(`image-${currIndex}`);

  //img src to change the image
  changeImage = 'image2.png';

  //mannually selected the next input
  nextInput = document.getElementById(`input-${currIndex + 1}`);
}

//////////Response
function inputResponse(selectedInput, currIndex, movie, nextInput) {
  //disable the input field
  selectedInput.setAttribute('disabled', 'true');

  //focus on the next input
  if (currIndex < movie.length) {
    nextInput.focus();
  }
}

////////////////////For guessing movie with numbers
function checkInput(inputId) {
  initialise(inputId);

  //to check if the INPUT is correct
  if (input) {
    if (Number(input) !== movie[currIndex - 1]) {
      currImage.src = changeImage;
    }

    inputResponse(selectedInput, currIndex, movie, nextInput);
  }
}

/////////////////For guessing movie with alphabets

function checkMovie2(inputId) {
  initialise(inputId);

  if (input) {
    if (input.toLowerCase() !== movie2[currIndex - 1]) {
      currImage.src = changeImage;
    }
    inputResponse(selectedInput, currIndex, movie2, nextInput);
  }
}
