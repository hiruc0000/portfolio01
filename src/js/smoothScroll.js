(() => {
    let eventType = window.ontouchstart ? 'touchtart' : 'click';

    const scrollTriggers = document.querySelectorAll('a[href^="#"]');
    const subHeader = document.querySelector('.sub-header');
    const menuButton = document.querySelector('.menu-button');

    scrollTriggers.forEach((scrollTrigger, i) => {
        scrollTrigger.addEventListener(eventType, (e) => {
            e.preventDefault();

            const targetPosition = targetCalc(scrollTrigger, i);

            scrollToAction(targetPosition);

            subHeader.classList.remove('menu-open');
            menuButton.classList.remove('close-button');
            
        });
    });
})();

function targetCalc(element) {
    const href = element.getAttribute('href');
    const targetElement = document.querySelector(href);

    const rect = targetElement.getBoundingClientRect().top;
    const offset = pageYOffset;
    let gap = 0;
    let target = rect + offset - gap;

    return target;
}

function scrollToAction(target) {
    scrollTo({
        top: target,
        behavior: 'smooth'
    });
}