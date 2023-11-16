function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    )
};

var creator = document.getElementById('creator');

window.addEventListener('scroll', function() {
    if (isElementInViewport(creator)) {
        creator.style.transition = "1.2s ease-in"
        creator.style.opacity = "1"
    }
});