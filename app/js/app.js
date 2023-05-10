import $ from 'jquery'
window.jQuery = $
window.$ = $

import 'magnific-popup/dist/jquery.magnific-popup.min.js';


document.addEventListener('DOMContentLoaded', () => {

	$('.nav-slider .item').on('click', function(){
		var slide = $(this).attr('data-nav');
		$('.nav-slider .item').removeClass('active');
		$(this).addClass('active');
		$('.data-slide').removeClass('active');
		$('.catalog-products').removeClass('active');
		$('*[data-slide='+ slide +']').addClass('active');
	});

	$('.catalog-products .type-item').on('click', function(){
		var slide = $(this).attr('data-type');

		$(this).siblings().removeClass('active');
		$(this).addClass('active');

		$(this).parent().siblings('.data-type-select').removeClass('active');
		$(this).parent().siblings('*[data-type-select='+ slide +']').addClass('active');

	});

	$('.service_popup').magnificPopup({
		type: 'inline',
		preloader: false,
		showCloseBtn: false,
		focus: '#name',
		mainClass: 'mfp-with-zoom',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.service_popup').on('mfpClose', function(e /*, params */) {
		$('.error-text').addClass('d-none');
		$('#phone').css('border-color', '');
		$('#name').css('border-color', '');
		$('form .button.dark.icon').removeClass('disabled');
	});

	var button = document.querySelectorAll('.send');
	var input = document.querySelector('#phone');
	var name = document.querySelector('#name');
	for (var i = 0; i < button.length; i++) {
	  button[i].addEventListener('click', function() {
	    if (input.value !== '' && name.value !== '') {} 
			else{
	     $('.error-text').removeClass('d-none');
	     $('#phone').css('border', '2px solid #E30613');
	     $('#name').css('border', '2px solid #E30613');
			 $('form .button.dark.icon').addClass('disabled');
	    }
	  })
	}

	// if (document.querySelector('.map')) {
	// 	;(function() {
	// 		if (typeof ymaps === 'undefined') {
	// 			return;
	// 		}
		
	// 		ymaps.ready(function () {
	// 			var ymap = document.querySelector('.map');
  // 	    var coordinates = ymap.getAttribute('data-coordinates');
  // 	    var address = ymap.getAttribute('data-address');
	// 			var myMap = new ymaps.Map('ymap2', {
	// 							center: coordinates.split(','),
	// 							zoom: 17
	// 					}, {
	// 							searchControlProvider: 'yandex#search'
	// 					}),
	// 					myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
	// 							balloonContent: address
	// 					});
	// 			myMap.geoObjects.add(myPlacemark);
	// 			myMap.behaviors.disable('scrollZoom');
	// 	});
	// 	})();
	// }

	$('.burger').on('click', function() {
		$('.mobile-menu').addClass('active');
	});

	$('.mobile-menu .close').on('click', function() {
		$('.mobile-menu').removeClass('active');
	});

	$('.about-info .border-block .button').on('click', function() {
		$(this).siblings('span').removeClass('d-none');
		$(this).remove();
	});

	if(document.documentElement.clientWidth < 992) {
		$('.catalog-products .type-item').removeClass('active');
		$('.catalog-products .type-item').on('click', function() {
			$(this).siblings('.catalog-column').hide( "fast");
			$(this).next('.catalog-column').show( "fast");	
		});
	}

})
