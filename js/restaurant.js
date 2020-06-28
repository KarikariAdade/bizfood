$(window).on('scroll', function () {
	if ($(window).scrollTop()) {
		$('#navigationbar').addClass('shit');
	} else {
		$('#navigationbar').removeClass('shit');
	}
	var BackToTop = $('#backToTop');
	$(window).on('scroll', function () {
		var self = $(this),
			height = self.height(),
			top = self.scrollTop();
		if (top > height) {
			if (!BackToTop.is('visible')) {
				BackToTop.show();
			}
		} else {
			BackToTop.hide();
		}
	})

})
// TYPED JS 

var typed = new Typed(".typejstext", {
	strings: ["Welcome to BizFood, Explore!"],
	showCursor: false,
	typeSpeed: 100,
	backSpeed: 50,
	loop: false,
	fadeOut: true,
	fadeOutClass: 'typed-fade-out',
	fadeOutDelay: 500,

});

/* SMOOTH SCROLL */
(function (document, $) {

	var $scrollElement = (function () {
		// Find out what to scroll (html or body)
		var $html = $(document.documentElement),
			$body = $(document.body),
			bodyScrollTop;
		if ($html.scrollTop()) {
			return $html;
		} else {
			bodyScrollTop = $body.scrollTop();
			// If scrolling the body doesn’t do anything
			if ($body.scrollTop(bodyScrollTop + 1).scrollTop() == bodyScrollTop) {
				return $html;
			} else {
				// We actually scrolled, so undo it
				return $body.scrollTop(bodyScrollTop);
			}
		}
	}());

	$.fn.smoothScroll = function (speed) {
		speed = ~~speed || 400;
		// Look for links to anchors (on any page)
		return this.find('a[href*="#"]').click(function (event) {
			var hash = this.hash,
				$hash = $(hash); // The in-document element the link points to
			// If it’s a link to an anchor in the same document
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
				// If the anchor actually exists…
				if ($hash.length) {
					// …don’t jump to the link right away…
					event.preventDefault();
					// …and smoothly scroll to it
					$scrollElement.stop().animate({
						'scrollTop': $hash.offset().top
					}, speed, function () {
						location.hash = hash;
					});
				}
			}
		}).end();
	};

}(document, jQuery));

$('html').smoothScroll();
$('html').smoothScroll(1200);



var swiper = new Swiper('.swiper-container', {
	spaceBetween: 30,
	speed: 2000,
	centeredSlides: true,
	autoplay: {
		delay: 4500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
