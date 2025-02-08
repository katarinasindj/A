document.querySelectorAll('.clickable-image').forEach(image => {
    image.addEventListener('click', function() {
        let flipContainer = this.closest('.image-flip');
        flipContainer.classList.toggle('flipped');
    });
});
