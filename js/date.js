'use strict';

const headerTime = document.querySelector(".header__time");
let date = new Date();

let options = {
   year: 'numeric',
   month: 'long',
   day: 'numeric',
   hour: 'numeric',
   minute: 'numeric',
   second: 'numeric'
};
headerTime.innerText = date.toLocaleString(options);

setInterval(function () {
   date = new Date();
   headerTime.innerText = date.toLocaleString(options)
}, 1000);
