'use strict';

const accordBtn = document.querySelectorAll(".accordion__btn");
console.log(accordBtn);

const accordBtn2 = document.querySelectorAll(".accordion__btnnotShow");
console.log("yes");

accordBtn.forEach(function (elem) {
   elem.addEventListener('click', function () {
      elem.classList.toggle('accordion__btnnotShow');
      console.log(elem);
      //elem.classList.toggle('show');

      let b = elem.parentElement.querySelector(".accordion__content");
      console.log(b);
      b.classList.toggle('show');

   });
});
