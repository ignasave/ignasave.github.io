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

	for (let i = 0; i < projects.length; i++) {
		projects[i].classList.remove('selected');
	}

	project.classList.add('selected');
	selectedProjectID = projectID;
}