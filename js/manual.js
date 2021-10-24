$(document).ready(function () {

  footerTop();

  $(window).scroll(function () {
    footerTop();
  });

  $(window).resize(function () {
    footerTop();
  });

  function footerTop() {
    var aux = $('#pdf').innerHeight();
    if ($(window).width() < 751) {
      aux = aux + 345

    } else {
      aux = aux + 110
    }
    $('footer').css('top', aux);
  }

});