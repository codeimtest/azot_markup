//carousels
var swiper = new Swiper(".clients_carousel", {
	slidesPerView: 2.5,
	loop: true,
	spaceBetween: 64,
	initialSlide: 2,
	 autoplay: {
     delay: 4000,
	 	pauseOnMouseEnter: true,
	 	waitForTransition: true,
   },
	breakpoints: {
     768: {
       slidesPerView: 4.5,
     },
	}
});
var swiper1 = new Swiper(".testimonials_carousel", {
	slidesPerView: 1,
	watchOverflow: true,
	watchSlidesProgress: true,
	spaceBetween: 1264,
	navigation: {
		nextEl: ".nav-next",
		prevEl: ".nav-prev",
	},
	breakpoints: {
    // when window width is >= 320px
    // 768: {
    //   slidesPerView: 3.1,
    // },
	}
});
var swiper2 = new Swiper(".works_carousel", {
	slidesPerView: 1,
	loop: false,
	spaceBetween: 40,
	navigation: {
		nextEl: ".nav-next",
		prevEl: ".nav-prev",
	},
	pagination: {
		el: ".swiper-pagination",
	},
	breakpoints: {
     768: {
       slidesPerView: 2,
     },
	}
});
var swiper3 = new Swiper('.service_carousel', {
  // Optional parameters
  loop: true,
	slidesPerView: 1,
	loop: false,
  // If we need pagination
	observer: true,
  observeParents: true,

	pagination: {
		el: '.swiper-pagination-service',
		clickable: true,
},
on: {
		init: function () {
				// Создаем пользовательский пагинатор
				var customPagination = document.querySelector('.custom-pagination');
				customPagination.innerHTML = '<div>01</div> <span>|</span> ' + '<div>0'+this.slides.length +'</div>';
		},
		slideChange: function () {
				// Обновляем пользовательский пагинатор при изменении слайда
				var customPagination = document.querySelector('.custom-pagination');
				customPagination.innerHTML = '<div>0'+(this.realIndex + 1)+'</div>' + ' <span>|</span> ' + '<div>0'+this.slides.length +'</div>';
		},
},
  // Navigation arrows
  navigation: {
    nextEl: '.nav-next-service',
    prevEl: '.nav-prev-service',
  },

  runCallbacksOnInit: true,
  // === new change
})


// FAQ
$('.faq_widget_item').each(function() {
  $(this).find('div:last').hide();
});

$(document).ready(function() {
  $(".faq_widget_item").each(function(index) {
    var $this = $(this);
    var $activeBlock = $this.find("div:last");

    if (index === 0) { // Первый элемент
      $this.find("div:last").show();
    } else {
      $activeBlock.hide();
    }
  });
});

$(".faq_widget_item").click(function() {
  var $this = $(this);
  var $activeBlock = $this.find("div:last");

  $this.siblings(".faq_widget_item").find("div:last").slideUp(function() {
    $(this).prev().removeClass("active");
  });
  $activeBlock.slideDown();	$('.faq_widget_item').removeClass('active')
  $this.addClass('active');

  var bgImageUrl = $this.data("item"); // Получаем значение из атрибута data-item
  $(".section_bg").css("background-image", "url(" + bgImageUrl + ")"); // Устанавливаем стиль background-image
});
$(document).ready(function() {
  var $firstFaqWidgetItem = $(".faq_widget_item").first(); // Получаем первый .faq_widget_item
  var bgImageUrl = $firstFaqWidgetItem.data("item"); // Получаем значение из атрибута data-item первого .faq_widget_item

  $(".section_bg").css("background-image", "url(" + bgImageUrl + ")"); // Устанавливаем стиль background-image для .section_bg
});
// Header toggle
$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	var header = $('header');

	if (scroll >= 300) {
		header.addClass('active');
	} else {
		header.removeClass('active');
	}
});

// Mobile menu
$('.menu_button').click(function(){
	$(this).toggleClass('active')
	$('body').toggleClass('lock')
	$('aside').toggleClass('active')
	$('header').toggleClass('toggled')
})
$('.back_btn').click(function(){
	$(this).parent().removeClass('active')
	$('.btn-toggle').removeClass('active')
	$('header nav ul li > a.active').removeClass('active')
});

// dropdown
$('.btn-toggle').click(function(e){
	$(this).toggleClass('active')
	$(this).next().toggleClass('active')
	e.preventDefault();
});
$(document).mouseup(function (e) {
	var container = $(".dropdown");

	// Если цель клика не является контейнером и не является дочерним элементом контейнера
	if (!container.is(e.target) && container.has(e.target).length === 0) {
			container.removeClass('active');
			$('.btn-toggle').removeClass('active')
	} else { 
		container.removeClass('active');
	}
});