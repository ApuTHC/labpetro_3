$(document).ready(function () {
    setTimeout(() => {
        footerTop();
    }, 50);
    function footerTop() {
        var aux =$(".banner").height()-$("footer").height()-30;
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