const body = document.querySelector("body");

const question = document.querySelector('[data-js="question"');
const answerBtn = document.querySelector(
  '[data-js="quiz-card--answer-button"]'
);
const answer = document.querySelector('[data-js="answer"]');
const tags = document.querySelector('[data-js="quiz-card__tags"]');

const sun = document.querySelector('[data-js="sun]');

sun.addEventListener("click", function () {
  sun.target.classList.toggle("moon"); 
  if (sun.classList.toggle("sun")) {
    body.classList.add('body');
  }
  else if (sun.classList.add("sun")) {
    body.classList.add('body');
  }
  
  
});

});

/* darkmode.addEventListener("click", function () {
  this.classList.toggle("moon");
  if (this.classList.toggle("sun")) {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "2s";
  } else {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "2s";
  }
});
*/
