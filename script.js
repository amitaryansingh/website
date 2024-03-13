window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var main = document.querySelector('.main');

    if (window.scrollY > 0) {
        header.style.boxShadow = '5px 5px 30px rgba(0, 0, 0, 0.5)';
        main.style.paddingTop = header.offsetHeight + 'px';
    } else {
        header.style.boxShadow = 'none';
        main.style.paddingTop = '';
    }
});
