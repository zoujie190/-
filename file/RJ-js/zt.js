$(function () {
	var _w = $(window).width();
	if (_w <= 768) {
		$(".m-nav").eq(0).click(function () {
			//swiper
			var mySwiper1 = new Swiper('.t-swiper01', {
				autoplay: 5000, //可选选项，自动滑动
				loop: true,
				onSlideChangeEnd: function (mySwiper1) {
					//Swiper初始化了
					var _index = mySwiper1.activeIndex - 1;
					if (_index == 3) {
						_index = 0;
					}
					$(".t-btn1 div").removeClass("active");
					$(".t-btn1 div").eq(_index).addClass("active");
					$('.t-page1-bg-3').css('backgroundImage', 'url(RJ-img/bg-3-' + (_index + 1) + '.jpg)');
				}
			});
			$(".t-swiper01").siblings(".t-swiper-title-default").find("div").on("click", function () {
				var myindex = +$(this).index();
				$(this).siblings("div").removeClass("active");
				$(this).addClass("active");
				mySwiper1.swipeTo(myindex, 300, false); //切换到第一个slide，速度为1秒
				$('.t-page1-bg-3').css('backgroundImage', 'url(RJ-img/bg-3-' + (myindex + 1) + '.jpg)');
			});
			var mySwiper2 = new Swiper('.t-swiper02', {
				autoplay: 5000, //可选选项，自动滑动
				loop: true,
				onSlideChangeEnd: function (mySwiper2) {
					//Swiper初始化了
					var _index = mySwiper2.activeIndex - 1;
					if (_index == 3) {
						_index = 0;
					}
					$(".t-btn2 div").removeClass("active");
					$(".t-btn2 div").eq(_index).addClass("active");
				}
			});
			$(".t-swiper02").siblings(".t-swiper-title-default").find("div").on("click", function () {
				var myindex = +$(this).index();
				$(this).siblings("div").removeClass("active");
				$(this).addClass("active");
				mySwiper2.swipeTo(myindex, 300, false); //切换到第一个slide，速度为1秒
			});
			var mySwiper3 = new Swiper('.t-swiper03', {
				autoplay: 5000, //可选选项，自动滑动
				loop: true,
				onSlideChangeEnd: function (mySwiper3) {
					//Swiper初始化了
					var _index = mySwiper3.activeIndex - 1;
					if (_index == 3) {
						_index = 0;
					}
					$(".t-btn3 div").removeClass("active");
					$(".t-btn3 div").eq(_index).addClass("active");
				}
			});
			$(".t-swiper03").siblings(".t-swiper-title-default").find("div").on("click", function () {
				var myindex = +$(this).index();
				$(this).siblings("div").removeClass("active");
				$(this).addClass("active");
				mySwiper3.swipeTo(myindex, 300, false); //切换到第一个slide，速度为1秒
			});
		});

	} else {

	}
});
