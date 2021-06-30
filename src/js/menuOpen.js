(() => {
    const menuButton = document.querySelector('.menu-button');
    const subHeader = document.querySelector('.sub-header');

    menuButton.addEventListener('click', () => {
        subHeader.classList.toggle('menu-open');
        menuButton.classList.toggle('close-button');
    });
})();