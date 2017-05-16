/* ===============================================================================
 * Name: JS Style V3.0 || 2017 !!!
 * Company: Banglasoft@Corporation™ !!!
 * Founder: Engr. Md Mahadi Hassan Herock !!!
 * Website URL-I: http://www.banglasoft.net !!!
 * Website URL-II: http://www.bangla-soft.com !!!
 * Description: Try To Do Something Better Than Other !!!
 ============================================================================== */

/* ====================== JS Plugins Start From Here ========================== */

/* ================ Owl Carousel JS Plugin Start From Here ==================== */

$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		items: 4,
		loop: true,
		margin: 40,
		nav: true,
		navText: ["<i class='fa fa-hand-o-left'></i>", "<i class='fa fa-hand-o-right'></i>"],
		responsive: {
			0: {
				items: 1,
				nav: true,
			},
			600: {
				items: 2,
				nav: true,
			},
			1000: {
				items: 4,
				nav: true,
			}
		}
	});
});

/* ==================== Owl Carousel JS Plugin End Here ======================= */

/* ========================= JS Plugins End Here ============================== */