	const slider = $(".slider").bxSlider({
		pager:false,
		controls:false,
		speed: 400
	});

	$('.slider-arrow__icon--left').click((e) => {
		e.preventDefault();
		slider.goToPrevSlide();
	});

	$('.slider-arrow__icon--right').click((e) => {
		e.preventDefault();
		slider.goToNextSlide();
	});