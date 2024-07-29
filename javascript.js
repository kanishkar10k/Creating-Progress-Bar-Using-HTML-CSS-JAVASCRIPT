document.addEventListener('DOMContentLoaded', () => {
    const progress = document.getElementById('progress');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const circles = document.querySelectorAll('.circle');
    let currentStep = 1;

    next.addEventListener('click', () => updateStep(1));
    prev.addEventListener('click', () => updateStep(-1));

    function updateStep(step) {
        currentStep = Math.min(Math.max(currentStep + step, 1), circles.length);
        updateProgress();
    }

    function updateProgress() {
        circles.forEach((circle, idx) => {
            circle.classList.toggle('active', idx < currentStep);
        });

        progress.style.width = ((currentStep - 1) / (circles.length - 1)) * 100 + '%';
        prev.disabled = currentStep === 1;
        next.disabled = currentStep === circles.length;
    }

    updateProgress();
});