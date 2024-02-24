/*const button = document.querySelector('.js-button');

console.log(button.classList.contains('js-button'));*/


function clickHere(selector) {
  const button = document.querySelector(selector);

  if (!button.classList.contains('is-toggled')) {
    verification();
    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
  console.log(button);
}

function verification() {
  const ver = document.querySelector('.is-toggled');

  if (ver === true) {
    ver.classList.remove('is-toggled');
  }
}

function calculateCost() {
  
  const inputElement = document.querySelector(`.js-box`);
  const mesaj = document.querySelector('.js-error');

  let cost = Number(inputElement.value);
  console.log(cost);

  if (cost < 0) {
    mesaj.classList.add('error');
    document.querySelector('.js-error').innerHTML = `Error: cost cannot be less than $0`;
  } else {
    mesaj.classList.remove('error');
    document.querySelector('.js-error').innerHTML = `Your total cost is: ${cost}`;
  }

}

function handleKeydown(event) {
  if (event.key === 'Enter') {
    calculateCost();
  }
}
