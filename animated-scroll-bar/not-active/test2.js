// Animate scroll bar in between two elements
var win = $(window),
	divOnePos = $(".div-one").offset().top,
	divTwoPos = $(".div-two").offset().top,
	divThreePos = $(".div-three").offset().top,
	divFourPos = $(".div-four").offset().top;

$(window).scroll(function() {
var winTop = win.scrollTop();
	if (winTop >= divOnePos && divFourPos >= winTop) {
			var o = winTop - divOnePos,
					a = divFourPos - divOnePos,
					n = Math.floor(o / a * 101) + '%', // 101%
					e = divFourPos - divOnePos;
					//r = n / 100 * e;
			$(".progress-bar").css("width", n); // make the progress bar go from 0 to 100%
	} else divOnePos > winTop ? $(".progress-bar").css("width", 0) : winTop > divFourPos && $(".progress-bar").css("width", e);
	
	// Progress bar container behavior
	if(winTop >= divOnePos) {
		$('.progress').addClass('active');
	}else if(winTop <= divOnePos) {
		$('.progress').removeClass('active');
	}
	// hide progress bar container when scrolled passed desired element
	if(winTop >= divFourPos) {
		$('.progress').removeClass('active');
	}
	
	if(winTop >= divTwoPos) {
		$('.progress-bar').addClass('orange');
	}else winTop <= divTwoPos ? $('.progress-bar').removeClass('orange') : '';
	
	if(winTop >= divThreePos) {
		$('.progress-bar').removeClass('orange');
		$('.progress-bar').addClass('green');
	}else winTop <= divThreePos ? $('.progress-bar').removeClass('green') : '';
	
	// console.log(n);
});

