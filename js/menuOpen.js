document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('[data-menu-button]');
    const closeButton = document.querySelector('[data-close-menu]');
    const menu = document.querySelector('[data-menu]');

    
    menuButton.addEventListener('click', () => {
        menuButton.classList.add('is-open');
        menu.classList.remove('is-hiden');
    });

   
    closeButton.addEventListener('click', () => {
        menuButton.classList.remove('is-open');
        menu.classList.add('is-hiden');
    });
});
