document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('[data-menu-button]');
    const closeButton = document.querySelector('[data-close-menu]');
    const menu = document.querySelector('[data-menu]');
    const menuButtonAbout = document.querySelector('[data-menu-button-about]');
    const closeButtonAbout = document.querySelector('[data-close-menu-about]');
    const menuAbout = document.querySelector('[data-menu-about]');

    menuButtonAbout.addEventListener('click', () => {
        menuButtonAbout.classList.add('is-open');
        menuAbout.classList.remove('is-hiden');
    });

    closeButtonAbout.addEventListener('click', () => {
        menuButtonAbout.classList.remove('is-open');
        menuAbout.classList.add('is-hiden');
    });
   
    menuButton.addEventListener('click', () => {
        menuButton.classList.add('is-open');
        menu.classList.remove('is-hiden');
    });

   
    closeButton.addEventListener('click', () => {
        menuButton.classList.remove('is-open');
        menu.classList.add('is-hiden');
    });
});
