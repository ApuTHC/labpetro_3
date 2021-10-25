$(document).ready(function () {

  $('.dropdown-item').removeClass("hovered");
  $('#btn_manual').addClass("hovered");
  $('#container_mainmenu_mobil .btn-group').removeClass("hovered");
  $('#container_tools_mobil #btn_manual').addClass("hovered");
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