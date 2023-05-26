let capital = document.querySelector('#capital');
let language = document.querySelector('#language');
let area = document.querySelector('#area');
let submit = document.querySelector('#submit');

let correctAnswer1 = document.getElementById('bangkok');
let correctAnswer2 = document.getElementById('thai');
let correctAnswer3 = document.getElementById('southern-thailand');

let myForm = document.querySelector('#form');

submit.addEventListener('click', function() {


  if(correctAnswer1.checked === true) { 
    capital.textContent = 'Congrats you answered correctly, the capital Bangkok!';
    capital.style.color = 'green';
  } else {
    capital.textContent = 'Your answer is not correct, the correct answer is Bangkok';
    capital.style.color = 'red';
  }

  if(correctAnswer2.checked === true) {
    language.textContent = 'Congrats you answered correctly, the official language is Thai!';
    language.style.color = 'green';
  } else {
    language.textContent = 'Your answer is not correct, the official language is Thai';
    language.style.color = 'red';
  }

  if(correctAnswer3.checked === true) {
    area.textContent = 'Congrats you answered correctly, Phuket is in fact located in Southern Thailand!';
    area.style.color = 'green';
  } else {
    area.textContent = 'Your answer is not correct, Phuket is located in Southern Thailand';
    area.style.color = 'red';
  }

})

myForm.addEventListener('submit', function(event) {
  event.preventDefault();
})







