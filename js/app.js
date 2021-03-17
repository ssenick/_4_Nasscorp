function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

(function () {
	const burger = document.querySelector('.burger');
	const menuList = document.querySelector('.menu__body');
	const bodyLock = document.querySelector('body');
	let menuLink = document.querySelector('.menu__link');
	
	burger.addEventListener('click', () => {
		burger.classList.toggle('_active');
	});
	burger.addEventListener('click', () => {
		menuList.classList.toggle('_active');
	});
	burger.addEventListener('click', () => {
		bodyLock.classList.toggle('_lock');
	});
	burger.addEventListener('click', () => {
		menuLink.classList.toggle('_active');
	});
}());

//присвоение класса при скроле
// для навешивания BG+ что бы меню стало видно
(function (){
	const header = document.querySelector('.header');
	window.onscroll = () => {
		if (window.pageYOffset > 50) {
			header.classList.add('_active');
		} else {
			header.classList.remove('_active');
		}
	}
}());
//========================================================================================================================================================

var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2.5,
      spaceBetween: 30,
      centeredSlides: true,
		initialSlide: 1,
		mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором
		// будет срабатывать прокрутка мышью.
		//eventsTarget: ".image-slider"
	},
		loop: true,
			// Ширина экрана
				// Автопрокрутка
	
	autoplay: {
		// Пауза между прокруткой
		delay: 3000,
		// Закончить на последнем слайде
		stopOnLastSlide: false,
		// Отключить после ручного переключения
		disableOnInteraction: true,
	},
	
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		1120: {
			slidesPerView: 2,
		},
		1387: {
			slidesPerView: 2.5,
		}
	},
 });