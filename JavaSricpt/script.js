document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            header.style.top = '-50px'; // Mueve el header hacia arriba cuando haces scroll hacia abajo
        } else {
            header.style.top = '0'; // Devuelve el header a su posición original cuando haces scroll hacia arriba
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});
