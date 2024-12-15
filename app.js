'use strict';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const forcusInput = (inputElement, label, color) => {
   inputElement.addEventListener('focus', () =>{
        label.classList.add('border-gray-500');
   })
   inputElement.addEventListener('blur', () => {
       label.classList.remove('border-gray-500');
   });
}

const inputEmail = $('#sendEmail');
const labelEmail = $('#formEmail');

// Sử dụng hàm forcusInput với callback
forcusInput(inputEmail, labelEmail, 'border-gray-500');
