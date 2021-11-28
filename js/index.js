/* -------------- Click Handlers -------------- */

const onClickMobileSideButton = () => {
	const sideButtons = document.getElementsByClassName('mobile-side-buttons')[0];
	const classes = sideButtons.classList;

	if (classes.contains('open')) {
		classes.remove('open');
	} else {
		classes.add('open');
	}
};
const onClickMobileSideSelectorButton = () => {
	const sideButtons = document.getElementsByClassName('selector-content')[0];
	const classes = sideButtons.classList;

	if (classes.contains('open')) {
		classes.remove('open');
	} else {
		classes.add('open');
	}
};

/* -------------- Proyects -------------- */

const onChangeProject = (projectID) => {
	const project = document.getElementById(projectID);
	const projects = document.getElementsByClassName('proyect');
	const desktopIcons = document.querySelectorAll('.desktop-selector .icon');
	const desktopIcon = document.getElementById('icon-' + projectID);

	for (let i = 0; i < projects.length; i++) {
		projects[i].classList.remove('selected');
		desktopIcons[i].classList.remove('selected');
	}

	desktopIcon.classList.add('selected');
	project.classList.add('selected');
	selectedProjectID = projectID;
}