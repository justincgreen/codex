document.addEventListener('DOMContentLoaded', () => {	
	
	window.addEventListener('scroll', () => {		
		let value = window.scrollY;
		let bg = document.querySelector('.bg');
		let moon = document.querySelector('.moon');
		let mountain = document.querySelector('.mountain');
		let road = document.querySelector('.road');
		let text = document.querySelector('.text');
		
		bg.style.top = value * 0.5 + 'px';
		moon.style.left = -value * 0.5 + 'px';
		mountain.style.top = -value * 0.15 + 'px';
		road.style.top = value * 0.15 + 'px';
		text.style.top = value * 1 + 'px';
	})
});