const swiper = new Swiper('.banner', {
   loop: true,
   autoplay: {
      delay: 5000,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   }
});

const bookNow = new Swiper('.bookNow', {
   loop: true,
   effect: "fade",
   autoplay: {
      delay: 5000,
   }
});

const blog = new Swiper(".blogs", {
   loop: true,
   slidesPerView: 1,
   spaceBetween: 10,
   autoplay: {
      delay: 5000,
   },
   breakpoints: {
      1300: {
         slidesPerView: 2
      }
   },
   pagination: {
      el: ".swiper-pagination",
   }
});

const service = new Swiper(".serviceSlider", {
   breakpoints:{
      1299:{
         direction: "vertical",
         slidesPerView: 3
      },
      991:{
         slidesPerView: 3,
      },
      767:{
         slidesPerView: 2,
      }
   },
   // slidesPerView: 1,
   loop: true,
   autoplay: {
      delay: 3000,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   }
});

const reviews = new Swiper(".customerReviews", {
   breakpoints:{
      991:{
         slidesPerView: 3,
      },
      768:{
         slidesPerView: 2,
      }
   },
   // slidesPerView: 2,
   loop: true,
   autoplay: {
      delay: 5000,
   },
   pagination: {
      el: ".swiper-pagination",
   }
});