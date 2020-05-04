new WOW().init();

$(document).ready(function () {
  $('.first-screen-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    touchThreshold: 50,
    // waitForAnimate: false,
    // focusOnSelect: true,
    centerMode: true,
    initialSlide: 1,
    appendArrows: $('.slider-controls'),
    prevArrow: '<div class="left-control"></div>',
    nextArrow: '<div class="right-control"></div>',
    asNavFor: '.line-control',
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1
        }
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     arrows: false,
      //     centerMode: true,
      //     centerPadding: '40px',
      //     slidesToShow: 1
      //   }
      }
    ]
  });

  $('.line-control').slick({ // настройка навигации
    asNavFor: '.first-screen-slider',
    focusOnSelect: true,
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: true,
    initialSlide: 1,
    waitForAnimate: false,

  });

  $('.instagram-slider').slick({
    variableWidth: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    dots: false,
    cssEase: 'linear',
    accessibility: false,
    swipe: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

});

const progressbar = document.querySelector('.progressbar');
window.addEventListener('scroll', function (e) {
  var s = document.documentElement.scrollTop;
  var h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  progressbar.style.width = s / h * 100 + '%';
});



// first-screen-menu anim
document.querySelector('.first-screen-menu').addEventListener('mouseover', function () {
  anime({
    targets: '.first-screen-menu .line',
    scale: [0, 1],
    duration: 1000,
    delay: anime.stagger(70),
    loop: true,
    direction: 'alternate',
  });
});

document.querySelector('.first-screen-menu').addEventListener('mouseout', function () {
  anime.set('.first-screen-menu .line', {
    scale: 1
  });
  anime.remove('.first-screen-menu .line');
});

document.querySelector('.first-screen-menu').addEventListener('click', function () {
  anime({
    targets: '.first-screen-menu',
    scale: [0.6, 1],
    duration: 1000,
    loop: 1
  });
  anime.set('.first-screen-menu .line', {
    scale: 1
  });
  anime.remove('.first-screen-menu .line');
});


// navItems anim
var navItems = document.querySelectorAll('.nav-item');
navItems.forEach(el => el.addEventListener('mouseover',
  function () {
    anime({
      targets: this,
      scale: 1.3,
      duration: 300,
      easing: 'easeOutBack'
    });
  }
));


navItems.forEach(el => el.addEventListener('mouseout',
  function () {
    anime({
      targets: this,
      scale: 1,
      duration: 300,
      easing: 'easeOutBack'
    });
  }
));


navItems.forEach(el => el.addEventListener('click',
  function () {
    anime({
      targets: this,
      scale: [1.3, 1],
      duration: 150,
      direction: 'alternate',
      easing: 'linear'
    });
  }
));

var navs = document.querySelectorAll('.nav-item');
var indicies = [0, 1, 2, 3, 4, 5].sort(function () {
  return 0.5 - Math.random()
});
newNavs = [];
for (i = 0; i < 6; i++) {
  newNavs.push(navs[indicies[i]]);
}

anime({
  targets: newNavs,
  opacity: [0, 1],
  scale: [0, 1],
  duration: 2000,
  delay: anime.stagger(200),
});


// buttons anim
var buttons = document.querySelectorAll('.button, #submit');
buttons.forEach(el => el.addEventListener('mouseover',
  function () {
    anime({
      targets: this,
      scale: 1.2,
      boxShadow: '0px 4px 18px 1px rgba(0,0,0,0.59)',
      duration: 300,
      easing: 'easeOutBack'
    });
  }
));


buttons.forEach(el => el.addEventListener('mouseout',
  function () {
    anime({
      targets: this,
      scale: 1,
      boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.59)',
      duration: 300,
      easing: 'easeOutBack'
    });
  }
));


buttons.forEach(el => el.addEventListener('click',
  function () {
    anime({
      targets: this,
      scale: [1.2, 1],
      duration: 150,
      direction: 'alternate',
      easing: 'linear'
    });
  }
));

// galery anim
var buttons = document.querySelectorAll('.gal-photo img');
buttons.forEach(el => el.addEventListener('mouseover',
  function () {
    anime({
      targets: this,
      scale: 1.1,
      boxShadow: '0px 4px 18px 1px rgba(0,0,0,0.59)',
      duration: 300,
      easing: 'easeOutBack'
    });
  }
));


buttons.forEach(el => el.addEventListener('mouseout',
  function () {
    anime({
      targets: this,
      scale: 1,
      boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.59)',
      duration: 300,
      easing: 'easeOutBack'
    });
  }
));


// buttons.forEach(el => el.addEventListener('click',
//   function () {
//     anime({
//       targets: this,
//       scale: 1,
//       position: 'top 50% left 50%',
//       duration: 200,
//       direction: 'alternate',
//       easing: 'linear'
//     });
//   }
// ));