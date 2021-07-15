(() => {
    let eventType = window.ontouchstart ? 'touchstart' : 'click';

    const menuButton = document.querySelector('.menu-button');
    const subHeader = document.querySelector('.sub-header');

    menuButton.addEventListener(eventType, () => {
        subHeader.classList.toggle('menu-open');
        menuButton.classList.toggle('close-button');
    });
})();