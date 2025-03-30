let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
}

// scroll spy 
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navbar a');

window.onscroll = () =>{
  searchForm.classList.remove('active');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  }

  section.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 200;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(link =>{
        link.classList.remove('active');
        document.querySelector('.header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

};

window.onload = () =>{
  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  }
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  effect: "fade",
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".products-slider", {
  spaceBetween: 20,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  grabCursor:true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
// Thêm hiệu ứng particles khi hover vào đánh giá
document.querySelectorAll('.reviews .box').forEach(box => {
  box.addEventListener('mouseenter', function() {
      // Tăng tương tác particles khi hover đánh giá
      window.pJSDom[0].pJS.interactivity.modes.repulse.distance = 200;
      window.pJSDom[0].pJS.interactivity.modes.repulse.duration = 1;
  });
  
  box.addEventListener('mouseleave', function() {
      // Trở về trạng thái ban đầu
      window.pJSDom[0].pJS.interactivity.modes.repulse.distance = 100;
      window.pJSDom[0].pJS.interactivity.modes.repulse.duration = 0.4;
  });
});
const reviewsSlider = new Swiper('.reviews-slider', {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  autoplay: {
      delay: 5000,
      disableOnInteraction: false,
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      },
  }
});

