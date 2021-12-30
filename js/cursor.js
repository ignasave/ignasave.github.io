const innerCircle = document.getElementById('pointer-circle-inner');
const outerCircle = document.getElementById('pointer-circle-outer');

isMobile = () => window.innerWidth < 992

positionElement = (event) => {
	const mouse = {
		x: event.pageX,
		y: event.pageY,
	};
	innerCircle.style.left = mouse.x + 'px';
	innerCircle.style.top = mouse.y + 'px';

	setTimeout(() => {
		outerCircle.style.left = mouse.x + 'px';
		outerCircle.style.top = mouse.y + 'px';
	}, 100);
};

let timer = false;

if(!isMobile()) {
    document.addEventListener('mousemove', (event) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(positionElement, 1, event);
    });
    
    document.addEventListener('click', () => {
        innerCircle.classList.add('shrink');
        outerCircle.classList.add('expand');
        setTimeout(() => {
            innerCircle.classList.remove('shrink');
            outerCircle.classList.remove('expand');
        }, 500);
    });
} else {
	innerCircle.classList.add('disappear');
	outerCircle.classList.add('disappear');
}
