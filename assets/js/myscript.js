'use strict';

// Modal Handling
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

const closeFunc = () => modal.classList.add('closed');

modalCloseOverlay.addEventListener('click', closeFunc);
modalCloseBtn.addEventListener('click', closeFunc);

// Notification Toast Handling
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

toastCloseBtn.addEventListener('click', () => notificationToast.classList.add('closed'));

// Mobile Menu Handling
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

const closeMenuFunc = () => {
  mobileMenu.forEach(menu => menu.classList.remove('active'));
  overlay.classList.remove('active');
};

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  mobileMenuOpenBtn[i].addEventListener('click', () => {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', closeMenuFunc);
  overlay.addEventListener('click', closeMenuFunc);
}

// Accordion Handling
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener('click', function () {
    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let j = 0; j < accordion.length; j++) {
      if (clickedBtn) break;
      if (accordion[j].classList.contains('active')) {
        accordion[j].classList.remove('active');
        accordionBtn[j].classList.remove('active');
      }
    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');
  });
}

// Debounce function for resizing
const debounce = (func, delay) => {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
};

// Example: Debounce window resize
window.addEventListener('resize', debounce(() => {
  // Handle resizing
  console.log('Window has been resized!');
}, 300));
