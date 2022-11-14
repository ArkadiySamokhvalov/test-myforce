import Swiper, { Pagination } from 'swiper';

let init = false;

function swiperCard() {
  let packagesSwiper;
  let servicesSwiper;
  let dealsSwiper;

  if (window.innerWidth < 992) {
    if (!init) {
      init = true;

      packagesSwiper = new Swiper('#packages', {
        modules: [Pagination],
        direction: 'horizontal',
        slidesPerView: 'auto',
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
        },
      });

      servicesSwiper = new Swiper('#services', {
        modules: [Pagination],
        direction: 'horizontal',
        slidesPerView: 'auto',
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
        },
      });

      dealsSwiper = new Swiper('#deals', {
        modules: [Pagination],
        spaceBetween: 30,
        direction: 'horizontal',
        slidesPerView: 1,
        breakpoints: {
          600: {
            slidesPerView: 2,
          },
        },
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
        },
      });
    }
  } else if (init) {
    packagesSwiper.destroy();
    servicesSwiper.destroy();
    dealsSwiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener('resize', swiperCard);
