'use strict';

const accordBtn = document.querySelectorAll(".accordion__btn");

accordBtn.forEach(function (elem) {
   elem.addEventListener('click', function () {
      elem.classList.toggle('accordion__btnnotShow');
      let b = elem.parentElement.querySelector(".accordion__content");
      b.classList.toggle('show');
   });
});



