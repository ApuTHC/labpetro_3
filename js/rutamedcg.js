$(document).ready(function () {
    for (var i = 0; i < marca.length; i++) {
        if (i >= 9) {
            var aux = i-8;
            var class1;
            var class2;
            if(aux%2){
                class1='descript col-12 col-md-6';
                class2='foto d-none d-sm-block col-12 col-md-6';
            }else{
                class1='descript order-2 col-12 col-md-6';
                class2='foto order-1 d-none d-sm-block col-12 col-md-6';
            }
            $('<div/>', {
                id: 'ruta' + aux,
                class: 'timeline-item row ruta' + aux
            }).append(
                $('<div/>', {
                    class: 'año col-12'
                }).append(
                    '<h2>'+marca[i]['nombre']+'</h2>'
                )
            ).append(
                $('<div/>', {
                    class: class1
                }).append(
                    '<p>'+marca[i]['descrimacro']+'</p>'
                ) 
            ).append(
                $('<div/>', {
                    class: class2
                }).append(
                    '<img src="images/geomap/'+marca[i]['cod']+'/aflor.jpg" />'
                ).append(
                    '<p>'+marca[i]['descrigene']+'</p>'
                )
            ).appendTo(".timeline-main");

            $(".lineamenu").append(
                '<a href="#ruta'+aux+'">'+marca[i]['cod']+'</a>'
            );
        }
    }
    footerTop();
    linea();
    $(".lineamenu").css('padding-right',0);
    $(".lineaindice h4").css('margin-left', '-60px');
    
    $('.gotop').on('click', function (e) {
        e.preventDefault();
        if ($(window).scrollTop()!=0) {
            $('html, body').stop().animate({scrollTop:0},1000);
        }
    })

    $(".lineamenu").hover(function () {
        $(".lineamenu a").css('margin-left', 10);
        $(".lineamenu").css('padding-right', 10);
        $(".lineaindice h4").css('margin-left', '-60px');
            
    }, function () {
        $(".lineamenu a").css('margin-left', '-60px');
        $(".lineamenu").css('padding-right','45px');
        $(".lineaindice h4").css('margin-left', 0);
    }
    );

    $('.lineamenu a').on('click', function (e) {
        e.preventDefault();
        var seccion = $($(this).attr('href')).offset().top; //Distancia entre el top y el elemento
        if ($(this).attr('href') == '#linea0' ) {
            seccion= seccion- 250;
        }else if($(window).width()<559) {
            seccion= seccion - 200;
        }else if($(window).width()>=559) {
            seccion= seccion - 67;
        }
        $('html, body').stop().animate({scrollTop:seccion},1000);
    });

    function footerTop() {
        var aux =$(".contenido-pagina").height()+$(".contenido-pagina").offset().top;
        $('footer').css('top',aux);
    }

    function linea(){
        if($(window).scrollTop() >= $(".ruta1").offset().top-300 ){
            $(".gotop").css('margin-right', '0px');
        }
        if ($(window).scrollTop() <= $(".ruta1").offset().top-500) {
            $(".banner-principal").css('background-image', 'url("images/main/lab.jpg")');
            $(".gotop").css('margin-right', '-60px');
        }
        else if ($(window).scrollTop() >= $(".ruta1").offset().top-300 && $(window).scrollTop() <= $(".ruta2").offset().top-300) {
            $(".banner-principal").css('background-image', 'url("images/geomap/M-CG-1/aflor.jpg")');
        }
        else if ($(window).scrollTop() >= $(".ruta2").offset().top-300 && $(window).scrollTop() <= $(".ruta3").offset().top-300) {
            $(".banner-principal").css('background-image', 'url("images/geomap/M-CG-2/aflor.jpg")');
        }
        else if ($(window).scrollTop() >= $(".ruta3").offset().top-300 && $(window).scrollTop() <= $(".ruta4").offset().top-300) {
            $(".banner-principal").css('background-image', 'url("images/geomap/M-CG-3/aflor.jpg")');
        }
        else if ($(window).scrollTop() >= $(".ruta4").offset().top-300 && $(window).scrollTop() <= $(".ruta5").offset().top-300) {
            $(".banner-principal").css('background-image', 'url("images/geomap/M-CG-4/aflor.jpg")');
        }
        else if ($(window).scrollTop() >= $(".ruta5").offset().top-300 && $(window).scrollTop() <= $(".ruta6").offset().top-300) {
            $(".banner-principal").css('background-image', 'url("images/geomap/M-CG-5/aflor.jpg")');
        }
        else if ($(window).scrollTop() >= $(".ruta6").offset().top-300 && $(window).scrollTop() <= $(".ruta7").offset().top-300) {
            $(".banner-principal").css('background-image', 'url("images/geomap/M-CG-6/aflor.jpg")');
        }
        else if ($(window).scrollTop() >= $(".ruta7").offset().top-300 && $(window).scrollTop() <= $(".ruta8").offset().top-300) {
            $(".banner-principal").css('background-image', 'url("images/geomap/M-CG-7/aflor.jpg")');
        }
        else if ($(window).scrollTop() >= $(".ruta8").offset().top-300 && $(window).scrollTop() <= $(".ruta9").offset().top-300) {
            $(".banner-principal").css('background-image', 'url("images/geomap/M-CG-8/aflor.jpg")');
        }
        else if ($(window).scrollTop() >= $(".ruta9").offset().top-300 && $(window).scrollTop() <= $(".ruta9").offset().top+1000) {
            $(".banner-principal").css('background-image', 'url("images/geomap/M-CG-9/aflor.jpg")');
        }
    }

    
    $(window).resize(function () { 
        setTimeout(() => {
            footerTop();
            linea();
        }, 50);
    });
    $(window).scroll(function () { 
        setTimeout(() => {
            footerTop();
            linea();
        }, 50);
        
        if ($(window).scrollTop()<$("header").height() || $(window).scrollTop()>$("footer").offset().top-630) {
            $(".lineamenu").css('padding-right',0);
            $(".lineaindice h4").css('margin-left', '-60px');
        }else{
            $(".lineamenu a").css('margin-left', '-60px');
            $(".lineamenu").css('padding-right','45px');
            $(".lineaindice h4").css('margin-left', 0);
        } 

    });
    $("#pestania-accesibilidad").click(function (e) { 
        e.preventDefault();
        setTimeout(() => {
            footerTop();
            linea();
        }, 50);
    });
});