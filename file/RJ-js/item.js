$(function () {
  var swiper_page1_5 = new Swiper('.swiper-container-page1-5', {
    autoplay: {
      delay: 10000,
      stopOnLastSlide: false,
      disableOnInteraction: true
    },
    on: {
      slideChange: function () {
        if (swiper_page1_5.activeIndex == 0) {
          $('.t-page1-bg-5 .first').removeClass('show').siblings('p').addClass('show')
        } else {
          $('.t-page1-bg-5 .last').removeClass('show').siblings('p').addClass('show')
        }
      }
    }
  })
  $('.t-page1-bg-5 .first').click(function () {
    swiper_page1_5.slideTo(0, 500, false)
    $(this).removeClass('show').siblings('p').addClass('show')
  })
  $('.t-page1-bg-5 .last').click(function () {
    swiper_page1_5.slideTo(1, 500, false)
    $(this).removeClass('show').siblings('p').addClass('show')
  })

  var swiper_page1_6 = new Swiper('.swiper-container-page1-6', {
    autoplay: {
      delay: 10000,
      stopOnLastSlide: false,
      disableOnInteraction: true
    },
    on: {
      slideChange: function () {
        if (swiper_page1_6.activeIndex == 0) {
          $('.t-page1-bg-6 .first').addClass('show').siblings('p').removeClass('show')
        } else {
          $('.t-page1-bg-6 .last').addClass('show').siblings('p').removeClass('show')
        }
      }
    }
  })
  $('.t-page1-bg-6 .first').click(function () {
    swiper_page1_6.slideTo(0, 500, false)
    $(this).addClass('show').siblings('p').removeClass('show')
  })
  $('.t-page1-bg-6 .last').click(function () {
    swiper_page1_6.slideTo(1, 500, false)
    $(this).addClass('show').siblings('p').removeClass('show')
  })

  var swiper_page1_7 = new Swiper('.swiper-container-page1-7', {
    autoplay: {
      delay: 10000,
      stopOnLastSlide: false,
      disableOnInteraction: true
    },
    on: {
      slideChange: function () {
        if (swiper_page1_7.activeIndex == 0) {
          $('.t-page1-bg-7 .first').addClass('show').siblings('p').removeClass('show')
        } else {
          $('.t-page1-bg-7 .last').addClass('show').siblings('p').removeClass('show')
        }
      }
    }
  })
  $('.t-page1-bg-7 .first').click(function () {
    swiper_page1_7.slideTo(0, 500, false)
    $(this).addClass('show').siblings('p').removeClass('show')
  })
  $('.t-page1-bg-7 .last').click(function () {
    swiper_page1_7.slideTo(1, 500, false)
    $(this).addClass('show').siblings('p').removeClass('show')
  })

  var width = document.body.clientWidth
  var swiper_page1_9 = new Swiper('.swiper-container-page1-9', {
    autoplay: {
      delay: 10000,
      stopOnLastSlide: false,
      disableOnInteraction: true
    },
    slidesPerView: width < 768 ? 1 : 3,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })
  $('.t-page1-bg-3 .page1-bg3-link1').click(function () {
    document.getElementById('t-page1-4').scrollIntoView()
  })
  $('.t-page1-bg-3 .page1-bg3-link2').click(function () {
    document.getElementById('t-page1-5').scrollIntoView()
  })
  $('.t-page1-bg-3 .page1-bg3-link3').click(function () {
    document.getElementById('t-page1-6').scrollIntoView()
  })
  $('.t-page1-bg-3 .page1-bg3-link4').click(function () {
    document.getElementById('t-page1-7').scrollIntoView()
  })
})
