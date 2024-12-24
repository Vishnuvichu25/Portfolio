document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.circular-progress');

    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.setProperty('--progress', progress * 3.6 + 'deg');
    });
});
