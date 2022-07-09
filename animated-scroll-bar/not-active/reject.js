<!-- <script>
window.addEventListener('scroll', () => {
	let docTop  = window.pageYOffset || document.documentElement.scrollTop; // tracks entire page scroll
	let divOneTop = document.querySelector('.div-one').offsetTop;
	let divOneBottom = divOneTop + document.querySelector('.div-one').clientHeight;
	let divTwoTop = document.querySelector('.div-two').offsetTop;
	let divThreeTop = document.querySelector('.div-three').offsetTop;
	
	if(docTop >= divOneTop) {
		console.log('div one top reached');
	}else if(docTop >= divOneBottom) {
		console.log('div one bottom reached')
	}
	// if(docTop >= divTwoTop) {
	// 	console.log('div two reached');
	// }
	
});
</script> -->
<!-- <script src="test1.js"></script> -->
<!-- <script>
window.addEventListener('scroll', () => {
	// Page Scroll Progress Bar
	let progressParent = document.querySelector('.progress');
	let progress = document.querySelector('.progress-bar');
	
	let documentHeight = document.documentElement.scrollHeight;
	let documentTop = document.documentElement.scrollTop
	let documentBottom = documentTop + documentHeight;
	let heroHeight = document.querySelector('.hero').clientHeight;
	let heroTop = document.querySelector('.hero').offsetTop;
	let heroBottom = heroTop + heroHeight;
	let percentage = (documentBottom - heroTop) / ((documentHeight + heroHeight));
	
	let divOneTop = document.querySelector('.div-one').getBoundingClientRect().top;
	let divTwoTop = document.querySelector('.div-two').getBoundingClientRect().top;
	let divThreeTop = document.querySelector('.div-three').getBoundingClientRect().top;
	
	// if(divOneTop <= 0) {
	// 	console.log('Div One Top');
	// }
	
	let winScroll = document.querySelector('.div-one').scrollTop;
	let height = document.querySelector('.div-one').scrollHeight - document.querySelector('.div-one').clientHeight;
	let scrolled = (winScroll / height) * 100;
	progress.style.width = scrolled + '%';
	
	let doc = document.documentElement;
	let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
});
</script> -->