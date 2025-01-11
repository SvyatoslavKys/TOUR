document.addEventListener('DOMContentLoaded', () => {
    // Selectors
    const menuButton = document.querySelector('[data-menu-button]');
    const closeButton = document.querySelector('[data-close-menu]');
    const menu = document.querySelector('[data-menu]');
    const menuLinks = document.querySelectorAll('[data-menu] .menu a'); // Select all menu links

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

    // Main Menu event listeners
    if (menuButton && closeButton && menu) {
        menuButton.addEventListener('click', () => {
            toggleMenu(menuButton, menu, 'is-open', 'is-hiden', true);
        });

        closeButton.addEventListener('click', () => {
            toggleMenu(menuButton, menu, 'is-open', 'is-hiden', false);
        });
    }

    // Close the menu when a menu link is clicked
    menuLinks.forEach((link) => {
        link.addEventListener('click', () => {
            toggleMenu(menuButton, menu, 'is-open', 'is-hiden', false);
        });
    });
});
