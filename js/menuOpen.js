document.addEventListener('DOMContentLoaded', () => {
    // Selectors
    const menuButton = document.querySelector('[data-menu-button]');
    const closeButton = document.querySelector('[data-close-menu]');
    const menu = document.querySelector('[data-menu]');
    const menuButtonAbout = document.querySelector('[data-menu-button-about]');
    const closeButtonAbout = document.querySelector('[data-close-menu-about]');
    const menuAbout = document.querySelector('[data-menu-about]');

    // Helper function to toggle menus
    function toggleMenu(button, menu, isOpenClass, isHiddenClass, shouldOpen) {
        if (button && menu) {
            if (shouldOpen) {
                button.classList.add(isOpenClass);
                menu.classList.remove(isHiddenClass);
            } else {
                button.classList.remove(isOpenClass);
                menu.classList.add(isHiddenClass);
            }
        }
    }

    // Menu About event listeners
    if (menuButtonAbout && closeButtonAbout && menuAbout) {
        menuButtonAbout.addEventListener('click', () => {
            toggleMenu(menuButtonAbout, menuAbout, 'is-open', 'is-hiden', true);
        });

        closeButtonAbout.addEventListener('click', () => {
            toggleMenu(menuButtonAbout, menuAbout, 'is-open', 'is-hiden', false);
        });
    }

    // Main Menu event listeners
    if (menuButton && closeButton && menu) {
        menuButton.addEventListener('click', () => {
            toggleMenu(menuButton, menu, 'is-open', 'is-hiden', true);
        });

        closeButton.addEventListener('click', () => {
            toggleMenu(menuButton, menu, 'is-open', 'is-hiden', false);
        });
    }
});
