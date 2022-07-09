window.addEventListener('scroll', () => {
	// Page Scroll Progress Bar
	let progressParent = document.querySelector('.progress');
	let progress = document.querySelector('.progress-bar');
	let pageScroll = document.documentElement.scrollTop;
	let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let heroHeight = document.querySelector('.hero').clientHeight;
	
	let scrolled = (pageScroll / height) * 100;
	
	// What i need is for the page scroll progress is to not start until div one is reached 
	
	// Testing Offset each div height and position
	let divOneHeight = document.querySelector('.div-one').clientHeight;
	let divTwoHeight = document.querySelector('.div-two').clientHeight;
	let divThreeHeight = document.querySelector('.div-three').clientHeight;
	let totalHeight = divOneHeight + divTwoHeight + divThreeHeight;
	 
	let divOnePosition = document.querySelector('.div-one').offsetTop;
	let divTwoPosition = document.querySelector('.div-two').offsetTop;
	let divThreePosition = document.querySelector('.div-three').offsetTop;
	
	let customScroll = document.documentElement.scrollTop - heroHeight;

	// console.log(document.documentElement.scrollTop - heroHeight / 100 * 100);
				
	progress.style.width = scrolled + '%';				
	// progress.style.width = customScroll + 'px';				
	
	
	// when top of page reaches div one start progress bar animation
	if(progress.offsetWidth > 0) {
		progressParent.style.opacity = 1;
	}
	
	// when reach first section change bar color to orange
	if(pageScroll > divTwoPosition) {
		progress.classList.add('orange');
	}else {
		progress.classList.remove('orange');
	}
	
	// when 2nd section is reached change bar color to green
	if(pageScroll > divThreePosition) {
		progress.classList.add('green');
	}else {
		progress.classList.remove('green');
	}
});