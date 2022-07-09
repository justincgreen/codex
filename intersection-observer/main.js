// Section with the class .js-animate has stuff that animates onto page
const sections = document.querySelectorAll('.js-animate');

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.intersectionRatio > 0) {
				entry.target.classList.add('is-active');
		}
	});
});

sections.forEach(section => {
	observer.observe(section);
});