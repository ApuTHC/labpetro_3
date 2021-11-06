$(document).ready(function () {
    setTimeout(() => {
        footerTop();
    }, 50);
    function footerTop() {
        if ($('.contenido-pagina').innerHeight() + $("footer").height() < $(window).height()) {
            $('footer').css('top', $(".banner").height()-$("footer").height() +$(".contenido-pagina").offset().top + 30);
        }else{
            $('footer').css('top', $('.contenido-pagina').innerHeight() +$(".contenido-pagina").offset().top + 30);
        }
    }
    
    $(window).resize(function () { 
        setTimeout(() => {
            footerTop();
        }, 50);
    });
    $(window).scroll(function () { 
        setTimeout(() => {
            footerTop();
        }, 50);
    });
    $("#pestania-accesibilidad").click(function (e) { 
        e.preventDefault();
        setTimeout(() => {
            footerTop();
        }, 50);
    });
});