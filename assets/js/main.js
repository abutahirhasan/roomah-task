
// CSS TABLE OF CONTENTS


(function ($) {
	"use strict";

	$(document).ready(function () {

		// Nice Select Start
		$("select").niceSelect();

		// Testimonial Slider Start
		const ArchitectureWrapper = new Swiper(".Architecture-wrapper", {
			spaceBetween: 24,
			speed: 1500,
			loop: true,
			centeredSlides: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: true,
			},
			breakpoints: {
				1199: {
					slidesPerView: 3.5,
				},
				767: {
					slidesPerView: 2,
					spaceBetween: 18,
				},
				575: {
					slidesPerView: 1.5,
					spaceBetween: 16,
				},
				0: {
					slidesPerView: 1.3,
					spaceBetween: 14,
				},
			},
		});
	});
})(jQuery);
