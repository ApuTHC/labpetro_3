$(document).ready(function () {
    setTimeout(() => {
        footerTop();
    }, 50);
    function footerTop() {
        var aux =$(".contenido-pagina").height()+$(".contenido-pagina").offset().top;
        $('footer').css('top',aux);
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