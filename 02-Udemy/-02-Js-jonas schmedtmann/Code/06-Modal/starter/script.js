'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden'); //! to remove the class
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden'); //! to add the class
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal); //! we don't call teh function So they don't run right away so they can only be turned on when you press the button.

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //! to check the class
    closeModal();
  }
});
