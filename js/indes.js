'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const elemBody = document.body;
  const elemHeader = document.querySelector('.header');
  const btnHeader = document.getElementById('header__button');

  btnHeader.addEventListener('click', () => {
    elemBody.classList.toggle('overflow-hidden');
    elemHeader.classList.toggle('menu-open');
  });
});
