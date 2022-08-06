$(document).ready(function() {
  $(window).scroll(function() {
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  // SCROLL TO TOP
  $('.scroll-up-btn').click(function() {
    $('html').animate({scrollTop: 0});
  });

  // TOGGLE MENU - NAVBAR
  $('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  // TYPING ANIMATION SCRIPT
  let typed1 = new Typed('.typed', {
    strings: ["Model", "Athlete", "Fit-preneur", "Fitspiration Bootcamp Queen", "your Miss Nevada"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
});