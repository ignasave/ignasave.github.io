document.addEventListener('DOMContentLoaded', () => {
	/* -- NAV -- */
	anime({
		targets: 'nav',
		opacity: [0, 1],
		easing: 'easeOutExpo',
		translateY: [-200, 0],
	});
	anime({
		targets: '.mobile-side-buttons',
		opacity: [0, 1],
		easing: 'easeOutExpo',
		translateX: [-200, 0],
	});

	/* -- HEADER -- */
	var path = anime.path('#linePath');
	console.log(path, document.querySelector('#followerCircle'));
	anime({
		targets: '#followerCircle',
		translateX: path('x'),
		translateY: path('y'),
		rotate: path('angle'),
		easing: 'linear',
		duration: 2000,
		loop: true,
	});

	/* -- CANI YA -- */
	new Waypoint({
		element: document.querySelector('.caniya h3'),
		handler: function () {
			anime({
				targets: '.caniya h3',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 100,
			});
			this.destroy();
		},
		offset: '100%',
	});
	new Waypoint({
		element: document.querySelector('.caniya h4'),
		handler: function () {
			anime({
				targets: '.caniya h4',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 200,
			});
			this.destroy();
		},
		offset: '100%',
	});
	new Waypoint({
		element: document.querySelector('.caniya p'),
		handler: function () {
			anime({
				targets: '.caniya p',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 300,
			});
			this.destroy();
		},

		offset: '100%',
	});
	new Waypoint({
		element: document.querySelector('.caniya img'),
		handler: function () {
			anime({
				targets: '.caniya img',
				opacity: [0.5, 1],
				easing: 'easeOutExpo',
				translateX: [100, 0],
				duration: 10000,
			});
			this.destroy();
		},
		offset: '100%',
	});
	/* -- SKILLS -- */
	new Waypoint({
		element: document.querySelector('.skills .ux-ui'),
		handler: function () {
			anime({
				targets: '.skills .ux-ui',
				easing: 'easeOutExpo',
				translateY: [100, 0],
				opacity: [0, 1],
				delay: 50,
			});
			this.destroy();
		},
		offset: '100%',
	});
	new Waypoint({
		element: document.querySelector('.skills .frontend'),
		handler: function () {
			anime({
				targets: '.skills .frontend',
				easing: 'easeOutExpo',
				translateY: [100, 0],
				opacity: [0, 1],
				delay: 100,
			});
			this.destroy();
		},
		offset: '100%',
	});
	new Waypoint({
		element: document.querySelector('.skills .backend'),
		handler: function () {
			anime({
				targets: '.skills .backend',
				easing: 'easeOutExpo',
				translateY: [100, 0],
				opacity: [0, 1],
				delay: 150,
			});
			this.destroy();
		},

		offset: '100%',
	});
	new Waypoint({
		element: document.querySelector('.skills .mobile'),
		handler: function () {
			anime({
				targets: '.skills .mobile',
				easing: 'easeOutExpo',
				translateY: [100, 0],
				opacity: [0, 1],
				delay: 200,
			});
			this.destroy();
		},

		offset: '100%',
	});

	/* -- GEARTHLOGIC -- */
	new Waypoint({
		element: document.querySelector('.gearthlogic-experience h3'),
		handler: function () {
			anime({
				targets: '.gearthlogic-experience h3',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 0,
			});
			this.destroy();
		},
		offset: '100%',
	});
	new Waypoint({
		element: document.querySelector('.gearthlogic-experience h5'),
		handler: function () {
			anime({
				targets: '.gearthlogic-experience h5',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 100,
			});
			this.destroy();
		},
		offset: '100%',
	});
	new Waypoint({
		element: document.querySelector('.gearthlogic-experience h6'),
		handler: function () {
			anime({
				targets: '.gearthlogic-experience h6',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 200,
			});
			this.destroy();
		},

		offset: '100%',
	});
	new Waypoint({
		element: document.querySelector('.gearthlogic-experience p'),
		handler: function () {
			anime({
				targets: '.gearthlogic-experience p',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 300,
			});
			this.destroy();
		},

		offset: '100%',
	});
	new Waypoint({
		element: document.querySelector('.gearthlogic-experience .links'),
		handler: function () {
			anime({
				targets: '.gearthlogic-experience .links',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 400,
			});
			this.destroy();
		},

		offset: '100%',
	});

	/* -- PREVIOUS -- */
	new Waypoint({
		element: document.querySelector('.previous-work-experience h3'),
		handler: function () {
			anime({
				targets: '.previous-work-experience h3',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 0,
			});
			this.destroy();
		},
		offset: '100%',
	});
	new Waypoint({
		element: document.querySelector('.previous-work-experience #exactian h5'),
		handler: function () {
			anime({
				targets: '.previous-work-experience #exactian h5',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 100,
			});
			this.destroy();
		},
		offset: '100%',
	});
	new Waypoint({
		element: document.querySelector('.previous-work-experience #exactian h6'),
		handler: function () {
			anime({
				targets: '.previous-work-experience #exactian h6',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 200,
			});
			this.destroy();
		},
		offset: '100%',
	});
	new Waypoint({
		element: document.querySelector('.previous-work-experience #exactian p'),
		handler: function () {
			anime({
				targets: '.previous-work-experience #exactian p',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 300,
			});
			this.destroy();
		},
		offset: '100%',
	});
	new Waypoint({
		element: document.querySelector('.previous-work-experience #exactian .working-time'),
		handler: function () {
			anime({
				targets: '.previous-work-experience #exactian .working-time',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 400,
			});
			this.destroy();
		},
		offset: '100%',
	});
	new Waypoint({
		element: document.querySelector('.previous-work-experience #exactian .links'),
		handler: function () {
			anime({
				targets: '.previous-work-experience #exactian .links',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 500,
			});
			this.destroy();
		},
		offset: '100%',
	});
	new Waypoint({
		element: document.querySelector('.previous-work-experience #exactian img'),
		handler: function () {
			anime({
				targets: '.previous-work-experience #exactian img',
				opacity: [0.5, 1],
				easing: 'easeOutExpo',
				translateX: [100, 0],
				duration: 10000,
			});
			this.destroy();
		},
		offset: '100%',
	});

	new Waypoint({
		element: document.querySelector('.previous-work-experience #absalon h5'),
		handler: function () {
			anime({
				targets: '.previous-work-experience #absalon h5',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 100,
			});
			this.destroy();
		},
		offset: '100%',
	});
	new Waypoint({
		element: document.querySelector('.previous-work-experience #absalon h6'),
		handler: function () {
			anime({
				targets: '.previous-work-experience #absalon h6',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 200,
			});
			this.destroy();
		},
		offset: '100%',
	});
	new Waypoint({
		element: document.querySelector('.previous-work-experience #absalon p'),
		handler: function () {
			anime({
				targets: '.previous-work-experience #absalon p',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 300,
			});
			this.destroy();
		},
		offset: '100%',
	});
	new Waypoint({
		element: document.querySelector('.previous-work-experience #absalon .working-time'),
		handler: function () {
			anime({
				targets: '.previous-work-experience #absalon .working-time',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 400,
			});
			this.destroy();
		},
		offset: '100%',
	});
	new Waypoint({
		element: document.querySelector('.previous-work-experience #absalon .links'),
		handler: function () {
			anime({
				targets: '.previous-work-experience #absalon .links',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 500,
			});
			this.destroy();
		},
		offset: '100%',
	});
	new Waypoint({
		element: document.querySelector('.previous-work-experience #absalon img'),
		handler: function () {
			anime({
				targets: '.previous-work-experience #absalon img',
				opacity: [0.5, 1],
				easing: 'easeOutExpo',
				translateX: [100, 0],
				duration: 12000,
			});
			this.destroy();
		},
		offset: '100%',
	});

	/* -- ABOUT ME -- */
	new Waypoint({
		element: document.querySelector('.about-me h3'),
		handler: function () {
			anime({
				targets: '.about-me h3',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 100,
			});
			this.destroy();
		},
		offset: '100%',
	});
	new Waypoint({
		element: document.querySelector('.about-me h5'),
		handler: function () {
			anime({
				targets: '.about-me h5',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 200,
			});
			this.destroy();
		},
		offset: '100%',
	});
	new Waypoint({
		element: document.querySelector('.about-me h6'),
		handler: function () {
			anime({
				targets: '.about-me h6',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 300,
			});
			this.destroy();
		},
		offset: '100%',
	});
	new Waypoint({
		element: document.querySelector('.about-me p'),
		handler: function () {
			anime({
				targets: '.about-me p',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 400,
			});
			this.destroy();
		},
		offset: '100%',
	});

	/* -- CONTACT ME -- */
	new Waypoint({
		element: document.querySelector('.contact-me h3'),
		handler: function () {
			anime({
				targets: '.contact-me h3',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
			});
			this.destroy();
		},
		offset: '100%',
	});

	/* -- FOOTER -- */
	new Waypoint({
		element: document.querySelector('footer'),
		handler: function () {
			anime({
				targets: 'footer',
				easing: 'easeOutExpo',
				translateY: [200, 0],
				opacity: [0, 1],
			});
			this.destroy();
		},
		offset: '100%',
	});
});
