///Variables

var colores = ["Incoloro", "Gris", "Rojo", "Amarillo", "Verde", "Azul", "Cafe"],
colores_n = ["Incoloro", "Gris", "Rojo", "Amarillo", "Verde", "Azul y Violeta", "Café"],
opciones = ["intro", "repaso", "guia", "comenzar"],
formaAzul = ["TabularAz", "LaminasAz", "OtroAz"],
formaAzul_n = ["Tabular", "Prismas Largos", "Otro"],
formaVerde = ["PrismasLV", "PrismasCV", "LaminasAV", "OtroV"],
formaVerde_n = ["Prismas Largos", "Prismas Cortos", "Láminas", "Otro"],
formaAmar = ["PrismasCAma", "LaminasAAma", "RombosAma", "OtroAma"],
formaAmar_n = ["Prismas Cortos", "Láminas ", "Rombos", "Otro"],
formaCafe2 = ["PrismasLCa2", "PrismasCCa2", "LaminasACa2", "RombosCa2"],
formaCafe2_n = ["Prismas Largos", "Prismas Cortos", "Láminas ", "Rombos"],
formaCafe = ["PrismasCCa1", "RombosCa1", "OtroCa1"],
formaCafe_n = ["Prismas Cortos", "Rombos", "Otro"],
formaGris1 = ["PrimerO", "SegundoO", "TercerO", "Anomalo"],
formaGris1_n = ["Primer Orden", "Segundo Orden", "Tercer Orden", "Anómalo"],
formaGris2 = ["PrismasLGr", "HexagonalGr", "RombosAma", "OtroGr"],
formaGris2_n = ["Prismas Largos", "Hexagonal", "Rombos", "Otro"],
formaIncoloro1 = ["PrismasLIn1", "OtroIn1"],
formaIncoloro1_n = ["Prismas Largos", "Otro"],
formaIncoloro2 = ["LaminasAIn2", "OtroIn2"],
formaIncoloro2_n = ["Láminas", "Otro"],
formaIncoloro3 = ["PrismasLIn3", "RombosIn3", "OtroIn3"],
formaIncoloro3_n = ["Prismas Largos", "Rombos", "Otro"];

$(document).ready(function () {
    $('footer').css('top', $('.ppal').innerHeight());
    $('.main').css('height', $('footer').offset().top);
    $(window).resize(function (e) { 
        e.preventDefault();
        $('footer').css('top', $('.ppal').innerHeight());
        $('.main').css('height', $('footer').offset().top);
    });
    $(window).scroll(function () { 
        $('footer').css('top', $('.ppal').innerHeight());
        $('.main').css('height', $('footer').offset().top);
    });
    $("#resp").hide();
    $("#resp").width("0%");
    $("#primero").width("100%");
    Bienvenidos();

});

function resizePpal() {
    $('.main').css('height', $('.ppal').innerHeight());
    $('footer').css('top', $('.ppal').innerHeight());
}

function Bienvenidos() {

    $("#resp").hide();
    $("#resp").width("0%");
    if ($("#Pregu").length) {
        $("#Pregu").stop().slideUp(150, function () {
            $("#Pregu").remove();
            resizePpal();
        });
    }

    $("#conte a").attr("class", "but");
    $("#intro").attr("class", "but active");

    if ($("#segundo").length) {
        $("#segundo").slideToggle(150, function () {
            $("#segundo").remove();
        });
    }
    $("#Respuesta").html("");
    
    $("#primero").append($('<h2></h2>').attr("id", "Pregu").html("<p>Esta herramienta es solo una <b>guía</b>, recuerda que tú eres el que debe determinar el mineral correcto bajo tu criterio.</p>" +
        "<p><b>Recuerda:</b> Los minerales pueden ser muy variables en sus propiedades, este identificador <b>NO</b> asegura que elijas el mineral correcto, visitar frecuentemente el laboratorio y preguntar a los monitores es la mejor forma de mejorar tu criterio.</p>"
    ));
}

function Repaso() {

    $("#resp").hide();
    $("#resp").width("0%");
    if ($("#Pregu").length) {
        $("#Pregu").stop().slideUp(150, function () {
            $("#Pregu").remove();
            resizePpal();
        });
    }

    $("#conte a").attr("class", "but");
    $("#repaso").attr("class", "but active");

    if ($("#segundo").length) {
        $("#segundo").slideToggle(150, function () {
            $("#segundo").remove();
        });
    }

    $("#Respuesta").html("");
    $("#primero").append($('<h2></h2>').attr("id", "Pregu").attr("class", "texti").html("<p>Antes de comenzar repasemos las propiedades ópticas y morfométricas.<br></p>" +
        "<p><b>Propiedades ópticas:</b> Color y pleocroismo; relieve; color de interferencia; ángulo de extinción; elongación; figura de interferencia.<br></p>" +
        "<p><b>Propiedades morfométricas:</b> Grado de cristalinidad; forma; hábito; clivaje y fractura; inclusiones y alteraciones; maclas y texturas</p>"
    ));
}

function Funcionamiento() {

    $("#resp").hide();
    $("#resp").width("0%");
    if ($("#Pregu").length) {
        $("#Pregu").stop().slideUp(150, function () {
            $("#Pregu").remove();
            resizePpal();
        });
    }

    $("#conte a").attr("class", "but");
    $("#guia").attr("class", "but active");

    if ($("#segundo").length) {
        $("#segundo").slideToggle(150, function () {
            $("#segundo").remove();
        });
    }
    $("#Respuesta").html("");
    $("#primero").append($('<h2></h2>').attr("id", "Pregu").attr("class", "texti").html("<p>Selecciona las propiedades que observas en el mineral. </p>" +
        "<p>En la parte inferior aparecerán los minerales probables a medida que elijas las propiedades.</p>" +
        "<p>Debes recordar que estos minerales son los más probables, está en tu criterio elegir.</p>" +
        "<p>Debido a la variabilidad de los minerales <b>NO</b> bases todos tus criterios en esta guía.</p>"
    ));
}

function Color() {
    $("#resp").show();
    $("#resp").width("100%");

    $("#conte a").attr("class", "but");
    $("#comenzar").attr("class", "but active");
    if ($("#segundo").length) {
        $("#segundo").slideToggle(150, function () {
            $("#segundo").remove();
            resizePpal();
        });
    }
    $("#Pregu").slideUp(150, function () {
        $("#Pregu").remove();
        resizePpal();
    });
    var divi = $('<div></div>').attr("class", "conte").attr("id", "segundo");
    divi.append($('<h2></h2>').attr("id", "Pregu").attr("class", "texti").html("¿Cuál es el Color del Mineral?"));
    for (let index = 0; index < colores.length; index++) {
        var ases = $('<div></div>').attr("class", "but1")
            .css('background-image', "url('images/identificador/" + colores[index] + ".jpg')");
        ases.append($('<div></div>').attr("class", "but2").attr("onClick", "Tree('" + colores[index] + "')")
            .attr("id", "" + colores[index]).html("<br>" + colores_n[index])
        );
        divi.append(ases);
    }
    $("#primero").append(divi);
    $("#Respuesta").html("Por Favor Seleccione Alguna Opción");
}

function Tree(color) {
    if ($("#tercero").length) {
        $("#tercero").remove();
    }
    if ($("#Pregunta").length) {
        $("#Pregunta").slideUp(150, function () {
            $("#Pregunta").remove();
            resizePpal();
        });
    }


    $("#segundo .but2").attr("class", "but2");
    $("#" + color).attr("class", "but2 active");


    if (color == "Incoloro") {

        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Granate, Fluorita, Analcima, Halita, Silvita, Ópalo, Vídrio Volcánico, Pumpellyita, Epidota, Fogopita</p>" +
            "<p>Turmalina, Andalucita, Calcita, Cordierita, Apatito, Antofilita, Esfena, Dolomita, Zoisita, Clinozoisita</p>" +
            "<p>Cuarzo, Talco, Feldespatos, Moscovita, Circón, Olivino, Sillimanita, Tremolita, Leucita, Clorita</p>");
        $("#segundo").append($('<h2></h2>').attr("id", "Pregunta").attr("class", "texti1")
            .html("¿El Mineral es Isótropo?"));
        $("#Respuesta").slideDown(150, function () {
        
            resizePpal();
        });    
        Isotrop("IncoloroBranch2");

    } else if (color == "Gris") {

        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Granate, Fluorita, Analcima, Halita, Silvita, Ópalo, Vídrio Volcánico, Pumpellyita, Epidota, Fogopita</p>" +
            "<p>Turmalina, Andalucita, Calcita, Cordierita, Apatito, Antofilita, Esfena, Dolomita, Zoisita, Clinozoisita</p>" +
            "<p>Cuarzo, Talco, Feldespatos, Moscovita, Circón, Olivino, Sillimanita, Tremolita, Leucita, Clorita</p>");
        $("#segundo").append($('<h2></h2>').attr("id", "Pregunta").attr("class", "texti1")
            .html("¿El Mineral es Isótropo?"));
        Isotrop("GrisBranch2");

    } else if (color == "Azul") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Cordierita, Glaucofana, Cianita, Celestina, Turmalina, Corindón (Zafiro)</p>");
        $("#segundo").append($('<h2></h2>').attr("id", "Pregunta").attr("class", "texti1")
            .html("¿Cuál es la Forma Principal del Mineral?"));

        var divi = $('<div></div>').attr("class", "conte").attr("id", "tercero");
        for (let index = 0; index < formaAzul.length; index++) {
            var ases = $('<div></div>').attr("class", "but1")
                .css('background-image', "url('images/identificador/" + formaAzul[index] + ".jpg')");
            ases.append($('<div></div>').attr("class", "but2").attr("onClick", "AzulVioletaBranch('" + formaAzul[index] + "')")
                .attr("id", "" + formaAzul[index]).html("<br>" + formaAzul_n[index])
            );
            divi.append(ases).hide();
        }
        $("#segundo").append(divi);
        divi.slideToggle(150, function() {
            resizePpal();
        });


    } else if (color == "Cafe") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Esfena, Etaurolita, Sillimanita, Ortopiroxeno, Hornblenda, Antofilita, Aegirina, Biotita, Circón, Ópalo, Vídrio Volcánico</p>" +
            "<p>Rutilo, Calcedonia, Casiterita, Dolomita, Siderita, Turmalina, Arcillas, Flogopita, Clorita, Augita, Dravita, Olivino</p>");
        $("#segundo").append($('<h2></h2>').attr("id", "Pregunta").attr("class", "texti1")
            .html("¿El Mineral es Isótropo?"));
        Isotrop("CafeBranch");

    } else if (color == "Verde") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Clorita, Serpentina, Biotita, Glauconita, Turmalina, Casiterita, Actinolita, Aegirina, Epidota</p>" +
            "<p>Hornblenda, Pumpellyita, Ortopiroxeno, Anfíbol, Onfacita, Fluorita</p>");
        $("#segundo").append($('<h2></h2>').attr("id", "Pregunta").attr("class", "texti1")
            .html("¿El Mineral es Isótropo?"));
        Isotrop("VerdeBranch");

    } else if (color == "Rojo") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Vídrio Volcánico, Rodocrosita, Turmalina, Casiterita, Rutilo, Ortopiroxeno, Rodonita, Granate</p>");
        $("#segundo").append($('<h2></h2>').attr("id", "Pregunta").attr("class", "texti1")
            .html("¿El Mineral es Isótropo?"));
        Isotrop("RojoBranch");

    } else if (color == "Amarillo") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Biotita, Turmalina, Casiterita, Flogopita, Olivino, Pumpellyita, Estaurolita, Esfena</p>");
        $("#segundo").append($('<h2></h2>').attr("id", "Pregunta").attr("class", "texti1")
            .html("¿El Mineral es Pleocroico?"));
        var divi = $('<div></div>').attr("class", "conte").attr("id", "tercero");

        var ases = $('<div></div>').attr("class", "but1")
            .css('background-image', "url('images/identificador/pleo.jpg')");
        ases.append($('<div></div>').attr("class", "but2").attr("onClick", "AmarilloBranch('Si')")
            .attr("id", "Si").html("<br>Si")
        );
        divi.append(ases);

        var ases = $('<div></div>').attr("class", "but1")
            .css('background-image', "url('images/identificador/nopleo.jpg')");
        ases.append($('<div></div>').attr("class", "but2").attr("onClick", "AmarilloBranch('No')")
            .attr("id", "No").html("<br>No")
        );
        divi.append(ases).hide();
        $("#segundo").append(divi);
        divi.slideToggle(150, function() {
            resizePpal();
        });
    }
    resizePpal();
}

function Isotrop(functions) {
    resizePpal();
    var divi = $('<div></div>').attr("class", "conte").attr("id", "tercero");

    var ases = $('<div></div>').attr("class", "but1")
        .css('background-image', "url('images/identificador/isotropo.jpg')");
    ases.append($('<div></div>').attr("class", "but2").attr("onClick", functions + "('Si')")
        .attr("id", "Si").html("<br>Si")
    );
    divi.append(ases);

    var ases = $('<div></div>').attr("class", "but1")
        .css('background-image', "url('images/identificador/noisotropo.jpg')");
    ases.append($('<div></div>').attr("class", "but2").attr("onClick", functions + "('No')")
        .attr("id", "No").html("<br>No")
    );
    divi.append(ases).hide();
    $("#segundo").append(divi);
    divi.slideToggle(150, function() {
        resizePpal();
    });
}

function Clivaje(functions) {
    
    if ($("#cuarto").length) {
        $("#cuarto").remove();
    }

    var divi = $('<div></div>').attr("class", "conte").attr("id", "cuarto");

    var ases = $('<div></div>').attr("class", "but1")
        .css('background-image', "url('images/identificador/fluorita.jpg')");
    ases.append($('<div></div>').attr("class", "but2").attr("onClick", functions + "('Si')")
        .attr("id", "Sic").html("<br>Si")
    );
    divi.append(ases);

    var ases = $('<div></div>').attr("class", "but1")
        .css('background-image', "url('images/identificador/vidrio.jpg')");
    ases.append($('<div></div>').attr("class", "but2").attr("onClick", functions + "('No')")
        .attr("id", "Noc").html("<br>No")
    );
    divi.append(ases).hide();

    $("#tercero").append(divi);
    divi.slideToggle(150, function() {
        resizePpal();
    });

}

function RojoBranch(Isotropo) {

    if (Isotropo == "Si") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Vídrio Volcánico, Granate, Cromita</p>");
        $('#No').attr("class", "but2");
        $('#Si').attr("class", "but2 active");
    } else {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Casiterita, Rutilo, Ortopiroxeno, Biotita</p>");
        $('#Si').attr("class", "but2");
        $('#No').attr("class", "but2 active");

    }
    resizePpal();
}

function CafeBranch(Isotropo) {
    if ($("#cuarto").length) {
        $("#cuarto").remove();
    }
    if ($("#Pregunta1").length) {
        $("#Pregunta1").slideUp(150, function () {
            $("#Pregunta1").remove();
            resizePpal();
        });
    }

    if (Isotropo == "Si") {
        $('#No').attr("class", "but2");
        $('#Si').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Ópalo, Vídrio Volcánico</p>");
        $("#Pregunta1").html("");
        resizePpal();

    } else {
        $('#Si').attr("class", "but2");
        $('#No').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Esfena, Estaurolita, Sillimanita, Ortopiroxeno, Hornblenda, Antofilita, Aegirina, Biotita, Circón, Rutilo</p>" +
            "<p>Calcedonia, Casiterita, Dolomita, Siderita, Turmalina, Arcillas, Flogopita, Clorita, Augita, Dravita, Olivino</p>");
        $("#tercero").append($('<h2></h2>').attr("id", "Pregunta1").attr("class", "texti1")
            .html("¿Se Evidencia Clivaje en el Mineral?").hide());
        $("#Pregunta1").slideToggle(150, function() {
            resizePpal();
        });

        var divi = $('<div></div>').attr("class", "conte").attr("id", "cuarto");

        var ases = $('<div></div>').attr("class", "but1")
            .css('background-image', "url('images/identificador/clivaje.jpg')");
        ases.append($('<div></div>').attr("class", "but2").attr("onClick", "CafeBranch2('Si')")
            .attr("id", "Sic").html("<br>Si")
        );
        divi.append(ases);

        var ases = $('<div></div>').attr("class", "but1")
            .css('background-image', "url('images/identificador/noclivaje.jpg')");
        ases.append($('<div></div>').attr("class", "but2").attr("onClick", "CafeBranch2('No')")
            .attr("id", "Noc").html("<br>No")
        );
        divi.append(ases).hide();

        $("#tercero").append(divi);
        divi.slideToggle(150, function() {
            resizePpal();
        });
    }


}

function CafeBranch2(Clivaje) {
    if ($("#quinto").length) {
        $("#quinto").remove();
    }
    if ($("#Pregunta2").length) {
        $("#Pregunta2").slideUp(150, function () {
            $("#Pregunta2").remove();
            resizePpal();
        });
    }

    if (Clivaje == "Si") {
        $('#Noc').attr("class", "but2");
        $('#Sic').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Sillimanita, Ortopiroxeno, Hornblenda, Antofilita, Aegirina, Biotita, Dolomita, Siderita, Flogopita, Clorita, Augita</p>");
        $("#cuarto").append($('<h2></h2>').attr("id", "Pregunta2").attr("class", "texti1")
            .html("¿Cuál es la Forma Principal del Mineral?"));
        

        var divi = $('<div></div>').attr("class", "conte").attr("id", "quinto");
        for (let index = 0; index < formaCafe2.length; index++) {
            var ases = $('<div></div>').attr("class", "but1")
                .css('background-image', "url('images/identificador/" + formaCafe2[index] + ".jpg')");
            ases.append($('<div></div>').attr("class", "but2").attr("onClick", "CafeBranch2A('" + formaCafe2[index] + "')")
                .attr("id", "" + formaCafe2[index]).html("<br>" + formaCafe2_n[index])
            );
            divi.append(ases).hide();
        }
        $("#cuarto").append(divi);
        divi.slideToggle(150, function() {
            resizePpal();
        });

    } else {
        $('#Sic').attr("class", "but2");
        $('#Noc').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Esfena, Estaurolita, Circón, Rutilo, Calcedonia, Casiterita, Turmalina, Arcillas, Olivino</p>");
        $("#cuarto").append($('<h2></h2>').attr("id", "Pregunta2").attr("class", "texti1")
            .html("¿Cuál es la Forma Principal del Mineral?"));

        var divi = $('<div></div>').attr("class", "conte").attr("id", "quinto");
        for (let index = 0; index < formaCafe.length; index++) {
            var ases = $('<div></div>').attr("class", "but1")
                .css('background-image', "url('images/identificador/" + formaCafe[index] + ".jpg')");
            ases.append($('<div></div>').attr("class", "but2").attr("onClick", "CafeBranch2B('" + formaCafe[index] + "')")
                .attr("id", "" + formaCafe[index]).html("<br>" + formaCafe_n[index])
            );
            divi.append(ases).hide();
        }
        $("#cuarto").append(divi);
        divi.slideToggle(150, function() {
            resizePpal();
        });
    }

}

function CafeBranch2A(Forma) {

    $('#quinto .but2').attr("class", "but2");
    $('#' + Forma).attr("class", "but2 active");

    if (Forma == "LaminasACa2") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Clorita, Biotita, Flogopita</p>");

    } else if (Forma == "PrismasCCa2") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Ortopiroxeno, Augita, Aegirina</p>");

    } else if (Forma == "RombosCa2") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Dolomita, Siderita</p>");

    } else if (Forma == "PrismasLCa2") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Hornblenda, Antofilita</p>");

    }
    resizePpal();
}

function CafeBranch2B(Forma) {

    $('#quinto .but2').attr("class", "but2");
    $('#' + Forma).attr("class", "but2 active");

    if (Forma == "PrismasCCa1") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Turmalina, Estaurolita</p>");

    } else if (Forma == "RombosCa1") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Esfena</p>");

    } else if (Forma == "OtroCa1") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Circón, Rutilo, Olivino, Arcillas, Casiterita, Calcedonia</p>");
    }
    resizePpal();
}

function IncoloroBranch2(Isotropo) {

    if ($("#cuarto").length) {
        $("#cuarto").remove();
    }
    if ($("#Pregunta1").length) {
        $("#Pregunta1").slideUp(150, function () {
            $("#Pregunta1").remove();
            resizePpal();
        });
    }

    if (Isotropo == "Si") {
        $('#No').attr("class", "but2");
        $('#Si').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Granate, Fluorita, Analcima, Halita, Silvita, Ópalo, Vídrio Volcánico</p>");
        $("#tercero").append($('<h2></h2>').attr("id", "Pregunta1").attr("class", "texti1")
            .html("¿Se Evidencia Clivaje en el Mineral?"));
        Clivaje("IncoloroBranch2_1");

    } else {
        $('#Si').attr("class", "but2");
        $('#No').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Pumpellyita, Epidota, Flogopita, Cuarzo, Talco, Feldespatos, Moscovita, Circón, Olivino, Sillimanita, Tremolita, Leucita, Clorita</p>" +
            "<p>Andalucita, Calcita, Cordierita, Apatito, Antofilita, Esfena, Dolomita, Zoisita, Clinozoisita</p>");
        $("#tercero").append($('<h2></h2>').attr("id", "Pregunta1").attr("class", "texti1")
            .html("¿Cuál es el Orden del Color de Interferencia?"));

        var divi = $('<div></div>').attr("class", "conte").attr("id", "cuarto");
        for (let index = 0; index < formaGris1.length; index++) {
            var ases = $('<div></div>').attr("class", "but1")
                .css('background-image', "url('images/identificador/" + formaGris1[index] + ".jpg')");
            ases.append($('<div></div>').attr("class", "but2").attr("onClick", "IncoloroBranch2_2('" + formaGris1[index] + "')")
                .attr("id", "" + formaGris1[index]).html("<br>" + formaGris1_n[index])
            );
            divi.append(ases).hide();
        }
        $("#tercero").append(divi);
        divi.slideToggle(150, function() {
            resizePpal();
        });
    }
}

function IncoloroBranch2_2(Orden) {

    if ($("#quinto").length) {
        $("#quinto").remove();
    }
    if ($("#Pregunta2").length) {
        $("#Pregunta2").slideUp(150, function () {
            $("#Pregunta2").remove();
            resizePpal();
        });
    }

    $('#cuarto .but2').attr("class", "but2");
    $('#' + Orden).attr("class", "but2 active");

    if (Orden == "PrimerO") {

        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Pumpellyita, Anadalucita, Apatito, Cordierita, Antofilita, Tremolita, Cuarzo, Leucita, Sillimanita, Feldespatos</p>");
        $("#cuarto").append($('<h2></h2>').attr("id", "Pregunta2").attr("class", "texti1")
            .html("¿Se Evidencia Clivaje en el Mineral?"));
        
        var divi = $('<div></div>').attr("class", "conte").attr("id", "quinto");

        var ases = $('<div></div>').attr("class", "but1")
            .css('background-image', "url('images/identificador/clivajeincoloro.jpg')");
        ases.append($('<div></div>').attr("class", "but2").attr("onClick", "IncoloroBranch2_2A" + "('Si')")
            .attr("id", "Sic").html("<br>Si")
        );
        divi.append(ases);

        var ases = $('<div></div>').attr("class", "but1")
            .css('background-image', "url('images/identificador/noclivajeincoloro.jpg')");
        ases.append($('<div></div>').attr("class", "but2").attr("onClick", "IncoloroBranch2_2A" + "('No')")
            .attr("id", "Noc").html("<br>No")
        );
        divi.append(ases).hide();

        $("#cuarto").append(divi);
        divi.slideToggle(150, function() {
            resizePpal();
        });

    } else if (Orden == "SegundoO") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Pumpellyita, Antofilita, Tremolita, Olivino.</p>");
        $("#cuarto").append($('<h2></h2>').attr("id", "Pregunta2").attr("class", "texti1")
            .html("¿Cuál es la Forma Principal del Mineral?"));

        var divi = $('<div></div>').attr("class", "conte").attr("id", "quinto");
        for (let index = 0; index < formaIncoloro1.length; index++) {
            var ases = $('<div></div>').attr("class", "but1")
                .css('background-image', "url('images/identificador/" + formaIncoloro1[index] + ".jpg')");
            ases.append($('<div></div>').attr("class", "but2").attr("onClick", "IncoloroBranch2_2B('" + formaIncoloro1[index] + "')")
                .attr("id", "" + formaIncoloro1[index]).html("<br>" + formaIncoloro1_n[index])
            );
            divi.append(ases).hide();
        }
        $("#cuarto").append(divi);
        divi.slideToggle(150, function() {
            resizePpal();
        });

    } else if (Orden == "TercerO") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Moscovita, Talco, Flogopita, Epidota, Talco, Olivino, Circón, Calcita, Dolomita.</p>");
        $("#cuarto").append($('<h2></h2>').attr("id", "Pregunta2").attr("class", "texti1")
            .html("¿Cuál es la Forma Principal del Mineral?"));

        var divi = $('<div></div>').attr("class", "conte").attr("id", "quinto");
        for (let index = 0; index < formaIncoloro2.length; index++) {
            var ases = $('<div></div>').attr("class", "but1")
                .css('background-image', "url('images/identificador/" + formaIncoloro2[index] + ".jpg')");
            ases.append($('<div></div>').attr("class", "but2").attr("onClick", "IncoloroBranch2_2C('" + formaIncoloro2[index] + "')")
                .attr("id", "" + formaIncoloro2[index]).html("<br>" + formaIncoloro2_n[index])
            );
            divi.append(ases).hide();
        }
        $("#cuarto").append(divi);
        divi.slideToggle(150, function() {
            resizePpal();
        });
    } else if (Orden == "Anomalo") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Esfena, Clorita, Zoisita, Clinozoisita</p>");
        resizePpal();
    }
}

function IncoloroBranch2_2C(Forma) {

    $('#quinto .but2').attr("class", "but2");
    $('#' + Forma).attr("class", "but2 active");

    if (Forma == "LaminasAIn2") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Moscovita, Talco</p>");

    } else if (Forma == "OtroIn2") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Olivino, Epidota, Circón</p>");

    }
    resizePpal();
}

function IncoloroBranch2_2B(Forma) {

    $('#quinto .but2').attr("class", "but2");
    $('#' + Forma).attr("class", "but2 active");

    if (Forma == "PrismasLIn1") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Pumpellyita, Antofilita, Tremolita.</p>");

    } else if (Forma == "OtroIn1") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Olivino</p>");

    }
    resizePpal();
}

function IncoloroBranch2_2A(Clivaje) {

    if ($("#sexto").length) {
        $("#sexto").remove();
    }
    if ($("#Pregunta3").length) {
        $("#Pregunta3").slideUp(150, function () {
            $("#Pregunta3").remove();
            resizePpal();
        });
    }

    if (Clivaje == "Si") {
        $('#Noc').attr("class", "but2");
        $('#Sic').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Tremolita, Feldespatos, Leucita, Pumpellyita, Andalucita, Cordierita, Antofiita, Sillimanita</p>");
        $("#quinto").append($('<h2></h2>').attr("id", "Pregunta3").attr("class", "texti1")
            .html("¿El Mineral Presenta Maclas?").hide());
        $("#Pregunta3").slideToggle(150, function() {
            resizePpal();
        });

        var divi = $('<div></div>').attr("class", "conte").attr("id", "sexto");

        var ases = $('<div></div>').attr("class", "but1")
            .css('background-image', "url('images/identificador/macla.jpg')");
        ases.append($('<div></div>').attr("class", "but2").attr("onClick", "IncoloroBranch2_2A1" + "('Si')")
            .attr("id", "Sic1").html("<br>Si")
        );
        divi.append(ases);

        var ases = $('<div></div>').attr("class", "but1")
            .css('background-image', "url('images/identificador/nomacla.jpg')");
        ases.append($('<div></div>').attr("class", "but2").attr("onClick", "IncoloroBranch2_2A1" + "('No')")
            .attr("id", "Noc1").html("<br>No")
        );
        divi.append(ases).hide();

        $("#quinto").append(divi);
        divi.slideToggle(150, function() {
            resizePpal();
        });

    } else {
        $('#Sic').attr("class", "but2");
        $('#Noc').attr("class", "but2 active");
        $("#Pregunta3").html("");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Cuarzo, Olivino, Apatito</p>");
        resizePpal();
    }
}

function IncoloroBranch2_2A1(Maclas) {

    if ($("#septimo").length) {
        $("#septimo").remove();
    }
    if ($("#Pregunta4").length) {
        $("#Pregunta4").slideUp(150, function () {
            $("#Pregunta4").remove();
            resizePpal();
        });
    }

    if (Maclas == "Si") {
        $('#Noc1').attr("class", "but2");
        $('#Sic1').attr("class", "but2 active");
        $("#Pregunta4").html("");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Feldespatos, Leucita</p>");
        resizePpal();

    } else {
        $('#Sic1').attr("class", "but2");
        $('#Noc1').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Feldespatos, Tremolita, Pumpellyita, Andalucita, Cordierita, Antofilita, Sillimanita.</p>");
        $("#sexto").append($('<h2></h2>').attr("id", "Pregunta4").attr("class", "texti1")
            .html("¿Cuál es la Forma Principal del Mineral?").hide());
        $("#Pregunta4").slideToggle(150, function() {
            resizePpal();
        });
        var divi = $('<div></div>').attr("class", "conte").attr("id", "septimo");
        for (let index = 0; index < formaIncoloro3.length; index++) {
            var ases = $('<div></div>').attr("class", "but1")
                .css('background-image', "url('images/identificador/" + formaIncoloro3[index] + ".jpg')");
            ases.append($('<div></div>').attr("class", "but2").attr("onClick", "IncoloroBranch2_2A1A('" + formaIncoloro3[index] + "')")
                .attr("id", "" + formaIncoloro3[index]).html("<br>" + formaIncoloro3_n[index])
            );
            divi.append(ases).hide();
        }
        $("#sexto").append(divi);
        divi.slideToggle(150, function() {
            resizePpal();
        });
    }
}

function IncoloroBranch2_2A1A(Forma) {

    $('#septimo .but2').attr("class", "but2");
    $('#' + Forma).attr("class", "but2 active");

    if (Forma == "PrismasLIn3") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Andalucita, Tremolita, Pumpellyita, Antofilita, Sillimanita</p>");

    } else if (Forma == "OtroIn3") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Feldespatos, Cordierita</p>");

    } else if (Forma == "RombosIn3") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Andalucita, Sillimanita</p>");
    }
    resizePpal();
}

function IncoloroBranch2_1(Clivaje) {

    if (Clivaje == "Si") {
        $('#Noc').attr("class", "but2");
        $('#Sic').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Fluorita, Halita</p>");

    } else {
        $('#Sic').attr("class", "but2");
        $('#Noc').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Granate, Ópalo, Vídrio Volcánico</p>");
    }
    resizePpal();
}

function GrisBranch2(Isotropo) {

    if ($("#cuarto").length) {
        $("#cuarto").remove();
    }
    if ($("#Pregunta1").length) {
        $("#Pregunta1").slideUp(150, function () {
            $("#Pregunta1").remove();
            resizePpal();
        });
    }

    if (Isotropo == "Si") {
        $('#No').attr("class", "but2");
        $('#Si').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Granate, Fluorita, Analcima, Halita, Silvita, Ópalo, Vídrio Volcánico</p>");
        $("#tercero").append($('<h2></h2>').attr("id", "Pregunta1").attr("class", "texti1")
            .html("¿Se Evidencia Clivaje en el Mineral?"));
        Clivaje("GrisBranch2_1");
    } else {
        $('#Si').attr("class", "but2");
        $('#No').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Pumpellyita, Epidota, Flogopita</p>" +
            "<p>Turmalina, Andalucita, Calcita, Cordierita, Apatito, Antofilita, Esfena, Dolomita, Zoisita, Clinozoisita</p>" +
            "<p>Cuarzo, Talco, Teldespatos, Moscovita, Circón, Olivino, Sillimanita, Tremolita, Leucita, Clorita</p>");
        $("#tercero").append($('<h2></h2>').attr("id", "Pregunta1").attr("class", "texti1")
            .html("¿Se Evidencia Clivaje en el Mineral?"));
        Clivaje("GrisBranch2_2");
    }
}

function GrisBranch2_1(Clivaje) {

    if (Clivaje == "Si") {
        $('#Noc').attr("class", "but2");
        $('#Sic').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Fluorita, Halita</p>");


    } else {
        $('#Sic').attr("class", "but2");
        $('#Noc').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Granate, Ópalo, Vídrio Volcánico</p>");

    }

}

function GrisBranch2_2(Clivaje) {

    if ($("#quinto").length) {
        $("#quinto").remove();
    }
    if ($("#Pregunta2").length) {
        $("#Pregunta2").slideUp(150, function () {
            $("#Pregunta2").remove();
            resizePpal();
        });
    }

    if (Clivaje == "Si") {
        $('#Noc').attr("class", "but2");
        $('#Sic').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Feldespatos, Moscovita, Clorita, Tremolita, Calcita, Antofilita, Dolomita, Zoisita, Clinozoisita, Flogopita, Epidota, Sillimanita, Andalucita, Talco</p>");
        $("#cuarto").append($('<h2></h2>').attr("id", "Pregunta2").attr("class", "texti1")
            .html("¿Cuál es el Orden del Color de Interferencia?"));

        var divi = $('<div></div>').attr("class", "conte").attr("id", "quinto");
        for (let index = 0; index < formaGris1.length; index++) {
            var ases = $('<div></div>').attr("class", "but1")
                .css('background-image', "url('images/identificador/" + formaGris1[index] + ".jpg')");
            ases.append($('<div></div>').attr("class", "but2").attr("onClick", "GrisBranch2_2A('" + formaGris1[index] + "')")
                .attr("id", "" + formaGris1[index]).html("<br>" + formaGris1_n[index])
            );
            divi.append(ases).hide();
        }
        $("#cuarto").append(divi);
        divi.slideToggle(150, function() {
            resizePpal();
        });

    } else {
        $('#Sic').attr("class", "but2");
        $('#Noc').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Pumpellyita, Turmalina, Cordierita, Apatito, Esfena, Cuarzo, Olivino, Leucita</p>");
        $("#cuarto").append($('<h2></h2>').attr("id", "Pregunta2").attr("class", "texti1")
            .html("¿Cuál es la Forma Principal del Mineral?"));


        var divi = $('<div></div>').attr("class", "conte").attr("id", "quinto");
        for (let index = 0; index < formaGris2.length; index++) {
            var ases = $('<div></div>').attr("class", "but1")
                .css('background-image', "url('images/identificador/" + formaGris2[index] + ".jpg')");
            ases.append($('<div></div>').attr("class", "but2").attr("onClick", "GrisBranch2_2B('" + formaGris2[index] + "')")
                .attr("id", "" + formaGris2[index]).html("<br>" + formaGris2_n[index])
            );
            divi.append(ases).hide();
        }
        $("#cuarto").append(divi);
        divi.slideToggle(150, function() {
            resizePpal();
        });
    }

}

function GrisBranch2_2A(Orden) {

    $('#quinto .but2').attr("class", "but2");
    $('#' + Orden).attr("class", "but2 active");

    if (Orden == "PrimerO") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Feldespatos, Antofilita, Sillimanita, Andalucita, Tremolita.</p>");

    } else if (Orden == "SegundoO") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Tremolita,  Antofilita, Tremolita</p>");

    } else if (Orden == "TercerO") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Flogopita, Talco, Dolomita</p>");

    } else if (Orden == "Anomalo") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Clorita, Zoisita, Clinozoisita, Talco</p>");
    }
    resizePpal();
}

function GrisBranch2_2B(Forma) {

    $('#quinto .but2').attr("class", "but2");
    $('#' + Forma).attr("class", "but2 active");

    if (Forma == "HexagonalGr") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Apatito</p>");

    } else if (Forma == "PrismasLGr") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Turmalina, Pumpellyita</p>");

    } else if (Forma == "RombosAma") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Esfena</p>");

    } else if (Forma == "OtroGr") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Casiterita, Cordierita, Cuarzo, Olivino, leucita</p>");
    }
    resizePpal();
}

function AmarilloBranch(pleo) {
    if ($("#cuarto").length) {
        $("#cuarto").remove();
    }
    if ($("#Pregunta1").length) {
        $("#Pregunta1").slideUp(150, function () {
            $("#Pregunta1").remove();
            resizePpal();
        });
    }

    if (pleo == 'Si') {
        $('#No').attr("class", "but2");
        $('#Si').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Biotita, Turmalina, Casiterita, Flogopita, Pumpellyita, Esfena, Estaurolita</p>");
        $("#tercero").append($('<h2></h2>').attr("id", "Pregunta1").attr("class", "texti1")
            .html("¿Cuál es la Forma Principal del Mineral?").hide());
        $("#Pregunta1").slideToggle(150, function() {
            resizePpal();
        });
        var divi = $('<div></div>').attr("class", "conte").attr("id", "cuarto");
        for (let index = 0; index < formaAmar.length; index++) {
            var ases = $('<div></div>').attr("class", "but1")
                .css('background-image', "url('images/identificador/" + formaAmar[index] + ".jpg')");
            ases.append($('<div></div>').attr("class", "but2").attr("onClick", "AmarilloBranch2('" + formaAmar[index] + "')")
                .attr("id", "" + formaAmar[index]).html("<br>" + formaAmar_n[index])
            );
            divi.append(ases).hide();
        }
        $("#tercero").append(divi);
        divi.slideToggle(150, function() {
            resizePpal();
        });

    } else {
        $("#Pregunta1").html("");
        $('#Si').attr("class", "but2");
        $('#No').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Olivino</p>");
    }
}

function AmarilloBranch2(Forma) {
    $('#cuarto .but2').attr("class", "but2");
    $('#' + Forma).attr("class", "but2 active");

    if (Forma == "LaminasAAma") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Biotita, Flogopita</p>");

    } else if (Forma == "PrismasCAma") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Ortopiroxeno, Onfacita, Aegirina, Estaurolita</p>");

    } else if (Forma == "RombosAma") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Esfena</p>");

    } else if (Forma == "OtroAma") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Casiterita, Epidota</p>");

    }
    resizePpal();
}

function VerdeBranch(Isotropo) {
    if ($("#cuarto").length) {
        $("#cuarto").remove();
    }
    if ($("#Pregunta1").length) {
        $("#Pregunta1").slideUp(150, function () {
            $("#Pregunta1").remove();
            resizePpal();
        });
    }

    if (Isotropo == "Si") {
        $('#No').attr("class", "but2");
        $('#Si').attr("class", "but2 active");
        $("#Pregunta1").html("");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Fluorita</p>");
    } else {
        $('#Si').attr("class", "but2");
        $('#No').attr("class", "but2 active");
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Clorita, Serpentina, Biotita, Glauconita, Turmalina, Casiterita, Actinolita, Aegirina, Epidota, Hornblenda, Pumpellyita, Ortopiroxeno, Onfacita</p>");
        $("#tercero").append($('<h2></h2>').attr("id", "Pregunta1").attr("class", "texti1")
            .html("¿Cuál es la Forma Principal del Mineral?").hide());
        $("#Pregunta1").slideToggle(150, function() {
            resizePpal();
        });

        var divi = $('<div></div>').attr("class", "conte").attr("id", "cuarto");
        for (let index = 0; index < formaVerde.length; index++) {
            var ases = $('<div></div>').attr("class", "but1")
                .css('background-image', "url('images/identificador/" + formaVerde[index] + ".jpg')");
            ases.append($('<div></div>').attr("class", "but2").attr("onClick", "VerdeBranch2('" + formaVerde[index] + "')")
                .attr("id", "" + formaVerde[index]).html("<br>" + formaVerde_n[index])
            );
            divi.append(ases).hide();
        }
        $("#tercero").append(divi);
        divi.slideToggle(150, function() {
            resizePpal();
        });
    }
}

function VerdeBranch2(Forma) {
    $('#cuarto .but2').attr("class", "but2");
    $('#' + Forma).attr("class", "but2 active");

    if (Forma == "LaminasAV") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Clorita, Biotita</p>");

    } else if (Forma == "PrismasLV") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p> Actinolita, Hornblenda, Pumpellyita</p>");

    } else if (Forma == "PrismasCV") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Ortopiroxeno, Onfacita, Aegirina</p>");

    } else if (Forma == "OtroV") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Turmalina, Glauconita, Epidota</p>");

    }
    resizePpal();
}

function AzulVioletaBranch(Forma) {

    $('#tercero .but2').attr("class", "but2");
    $('#' + Forma).attr("class", "but2 active");

    if (Forma == "TabularAz") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Cianita</p>");

    } else if (Forma == "OtroAz") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Cordierita, Corindón (Zafiro)</p>");

    } else if (Forma == "LaminasAz") {
        $("#Respuesta").html("<h2>Minerales Posibles:</h2>" +
            "<p>Glaucofana, Turmalina</p>");
    }
    resizePpal();
}