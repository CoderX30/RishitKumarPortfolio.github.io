function smoothScroll(event, targetId) {
    event.preventDefault();
    document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
    });
}