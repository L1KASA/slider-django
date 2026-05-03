document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const menuToggle = document.getElementById('navbarNav');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768 && menuToggle.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(menuToggle);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  $(document).ready(function () {
    $('.main-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.thumbnails-slider'
    });

    $('.thumbnails-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.main-slider',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      arrows: true,
      prevArrow: '<button class="slider-btn prev-btn"><img src="/static/images/move-left.svg" alt="Prev"></button>',
      nextArrow: '<button class="slider-btn next-btn"><img src="/static/images/move-right.svg" alt="Next"></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            arrows: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            arrows: false
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            arrows: false
          }
        }
      ]
    });

    Fancybox.bind("[data-fancybox]", {});
  });
});
