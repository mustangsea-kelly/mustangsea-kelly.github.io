function toggleHeaderSticky() {
    if (window.scrollY > 50) {
        document.getElementById('header').classList = 'is-scrolling';
    } else {
        document.getElementById('header').classList = '';
    }
}

window.addEventListener("scroll", toggleHeaderSticky);