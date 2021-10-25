$(document).ready(function () {

  alert('Instrumentos proximos a vencer');

  footerTop();

  $(window).scroll(function () {
    footerTop();
  });

  $(window).resize(function () {
    footerTop();
  });

  $("#pestania-accesibilidad").click(function (e) { 
    e.preventDefault();
    setTimeout(() => {
        footerTop();
    }, 50);
  });

  function footerTop() {
    var aux = $('#pdf').innerHeight()+$("#pdf").offset().top;
    $('footer').css('top', aux);
  }

});