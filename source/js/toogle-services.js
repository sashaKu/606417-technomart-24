'use strict';
(function() {

  const box = document.querySelector(".services__info");
  const buttonList = box.querySelector(".services__nav-list");
  const buttons = buttonList.querySelectorAll(".services__nav-button");
  const cardList = box.querySelector(".services__list");
  const cards = cardList.querySelectorAll(".services__item");

  let itemActive = 1;
  let index = 0;
  let count = 0;

  buttonList.addEventListener('click', ({ target }) => {

   if (target.tagName === "BUTTON") {

     itemActive = target;

     for (const button of buttons) {
       count++;
       button.classList.remove("services__nav-button--current");

       if (button === itemActive) {
         button.classList.add("services__nav-button--current");
         index = count;
       }
     }

     count = 0;

     for (const card of cards) {
       count++;
       card.classList.remove("services__item--current");

       if (index === count) {
           card.classList.add("services__item--current");
       }
       else {
           card.classList.remove("services__item--current");
       }
     }

     count = 0;
   }
  });

})();
