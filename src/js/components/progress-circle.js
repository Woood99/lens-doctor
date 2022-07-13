if (document.querySelector('.progress-circle')) {
    const circles = document.querySelectorAll('.progress-circle');
    circles.forEach(el => {
        let progressCircle = el.querySelector('.progress-circle__progress');
        let progressValue = el.querySelector('.progress-circle__value');
        let radius = progressCircle.getAttribute('r');
        let circleLength = 2 * Math.PI * radius;
        progressCircle.setAttribute('stroke-dasharray', circleLength);
        let percenttageProgress;
        if (el.dataset.progress == 'number'){
            let full = el.dataset.progressFull;
            let value = el.dataset.progressValue;
            percenttageProgress = Math.floor(value / full * 100);
            progressValue.textContent = value;
        }
        if (el.dataset.progress == 'percent') {
            let percent = el.dataset.progressValue;
            percenttageProgress = Math.floor(percent);
            progressValue.textContent = percent + '%';
        }
        progressCircle.setAttribute('stroke-dashoffset', circleLength - circleLength * percenttageProgress / 100);
    });
}