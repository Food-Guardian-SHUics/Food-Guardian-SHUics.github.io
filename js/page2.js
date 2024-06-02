window.addEventListener('scroll', function () {
    var floatingObject = document.querySelector('.floating-object');
    var scrollPosition = window.scrollY + window.innerHeight;
    var objectPosition = floatingObject.offsetTop + floatingObject.offsetHeight / 2;

    if (scrollPosition > objectPosition) {
        floatingObject.classList.add('show');
    }
});
