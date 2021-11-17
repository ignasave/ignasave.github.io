const innerCircle = document.getElementById('pointer-circle-inner');
const outerCircle = document.getElementById('pointer-circle-outer');

const mouseX = (event) => event.pageX;
const mouseY = (event) => event.pageY;

const reposition = (element, mouse) => {
	element.style.left = mouse.x + 'px';
	element.style.top = mouse.y + 'px';
};

positionElement = (event) => {
	const mouse = {
		x: mouseX(event),
		y: mouseY(event),
	};
	reposition(innerCircle, mouse);
	setTimeout(() => reposition(outerCircle, mouse), 100);
};

let timer = false;
document.addEventListener('mousemove', (event) => {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(positionElement, 1, event);
});

document.addEventListener('click', () => {
    console.log('hola')
    innerCircle.classList.add("shrink");
    outerCircle.classList.add("expand");
    setTimeout(() => {
        innerCircle.classList.remove("shrink");
        outerCircle.classList.remove("expand");
    }, 500)
})
