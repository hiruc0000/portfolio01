(() => {
    const section = document.querySelector('.hero');
    const fadeTargets = document.querySelectorAll('.fade-target');

    const observer = new IntersectionObserver(callback, options = {
        rootMargin: '-10% 0px 0px'
    });
    const observer2 = new IntersectionObserver(callback2, options = {rootMargin: '-30% 0px'});

    observer.observe(section);

    fadeTargets.forEach((fadeTarget) => {
        observer2.observe(fadeTarget);
    });

})();

function callback(entries, observer) {
    const headerNav = document.querySelector('.header');

    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            headerNav.classList.add('header-nav-fixed');
        } else {
            headerNav.classList.remove('header-nav-fixed');
        }
    });
}


function callback2(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-slide');
            observer.unobserve(entry.target); //監視を一度で辞める場合に必要
        }
    });
}