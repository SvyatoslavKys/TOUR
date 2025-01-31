
const openModalBtn = document.querySelector('[data-modal-submit]');
const closeModalBtns = document.querySelectorAll('[data-close-thankmodal]'); 
const modalBackdrop = document.querySelector('[data-modal-backdrop]'); 


function openModal() {
  console.log('Opening modal...');
  modalBackdrop.classList.remove('is-hidden'); 
}


function closeModal() {
  console.log('Closing modal...');
  modalBackdrop.classList.add('is-hidden'); 
}


openModalBtn.addEventListener('click', (event) => {
  event.preventDefault(); 
  console.log('Form submit button clicked.');
  openModal();
});


closeModalBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log('Close button clicked.');
    closeModal();
  });
});
