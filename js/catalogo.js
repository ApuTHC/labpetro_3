/////////////////////////////////////////Variables
var auxlupa = false;
var auxhtml = false;
///////////////////////////////////////////Funcion PPAL
$(document).ready(function () {
  $(".sidebar").css('height', $('footer').offset().bottom);
  $('footer').css('top', $('.ppal').innerHeight());
  $('.main').css('height', $('footer').offset().top+1);
  $(window).resize(function (e) { 
    e.preventDefault();
    $('footer').css('top', $('.ppal').innerHeight());
    $('.main').css('height', $('footer').offset().top+1);
    $(".sidebar").css('height', $('footer').offset().bottom);

  });
  $(window).scroll(function () { 
    $('footer').css('top', $('.ppal').innerHeight());
    $('.main').css('height', $('footer').offset().top+1);
    $(".sidebar").css('height', $('footer').offset().bottom);

  });
});

function resizePpal() {
  $('.main').css('height', $('.ppal').innerHeight()+1);
  $('footer').css('top', $('.ppal').innerHeight());
  $(".sidebar").css('height', $('footer').offset().bottom);
}

function cargarMicro() {

  $("#butMacro").attr("class", "but");
  $("#butMicro").toggleClass("active");

  if ($("#primer").length) {
    $("#primer").slideToggle(150, function () {
      $("#primer").remove();
    });
  }

  var divi = $('<div></div>').attr("class", "conte").attr("id", "primer");
  for (let index = 1; index < 7; index++) {
    var ases = $('<a></a>').attr("class", "but")
      .attr("onClick", "cargaCajonMicro(" + index + ")")
      .attr("id", 'butCajonMicro' + index).html("Cajón " + index);
    divi.append(ases).hide();
  }
  $("#contenido").append(divi);
  divi.slideToggle(150, function() {
    resizePpal();
  });
}

function cargaCajonMicro(num) {

  var muestra = muestras["micro"]["cajon" + num];
  if ($("#segun").length) {
    $("#segun").fadeToggle(100, function () {
      $("#segun").remove();
    });
  }
  $('#primer a').attr("class", "but");
  $('#butCajonMicro' + num).toggleClass("active");

  var divi = $('<div></div>').attr("class", "conte").attr("id", "segun");
  for (let index = 0; index < muestra.length; index++) {
    var ases = $('<div></div>').attr("class", "but1")
      .attr("onClick", "cargarlado('micro','cajon" + num + "','" + index + "','" + muestra.length + "')")
      .css('background-image', "url('images/catalogo/muestras/" + muestra[index]["name1"] + ".jpg')");
    ases.append($('<div></div>').attr("class", "but2")
      .attr("id", "seccion" + index).html("" + muestra[index]["name1"] + "<br/>" + muestra[index]["nota"])
    );
    divi.append(ases).hide();
  }
  $("#primer").append(divi);
  divi.fadeToggle(150, function() {
    resizePpal();
  });
}

function cargarMacro() {

  $("#butMicro").attr("class", "but");
  $("#butMacro").toggleClass("active");

  if ($("#primer").length) {
    $("#primer").slideToggle(150, function () {
      $("#primer").remove();
      resizePpal();
    });
  }

  var divi = $('<div></div>').attr("class", "conte").attr("id", "primer");

  divi.append($('<a></a>').attr("class", "but")
    .attr("onClick", "cargaCajonMacro('ignea')")
    .attr("id", 'ignea').html("Ígneas"));

  divi.append($('<a></a>').attr("class", "but")
    .attr("onClick", "cargaCajonMacro('meta')")
    .attr("id", 'meta').html("Metamórficas"));
  divi.hide();

  $("#contenido").append(divi);
  divi.slideToggle(150, function() {
    resizePpal();
  });
}

function cargaCajonMacro(tipo) {

  if ($("#segun").length) {
    $("#segun").slideToggle(150, function () {
      $("#segun").remove();
    });
  }

  $("#primer a").attr("class", "but");
  $("#" + tipo).toggleClass("active");

  var divi = $('<div></div>').attr("class", "conte").attr("id", "segun");
  for (let index = 1; index < 9; index++) {
    var ases = $('<a></a>').attr("class", "but")
      .attr("onClick", "cargaMuestrasMacro('" + tipo + "'," + index + ")")
      .attr("id", 'butCajonMacro' + tipo + index).html("" + muestras["macro"][tipo]["cajon" + index]["descri"]["name"]);
    divi.append(ases).hide();
  }
  $("#primer").append(divi);
  divi.slideToggle(150, function() {
    resizePpal();
  });
}

function cargaMuestrasMacro(tipo, num) {

  if ($("#tercer").length) {
    $("#tercer").fadeToggle(100, function () {
      $("#tercer").remove();
    });
  }
  var muestra = muestras["macro"][tipo]["cajon" + num]["muestras"];

  $('#segun a').attr("class", "but");
  $('#butCajonMacro' + tipo + num).toggleClass("active");

  var divi = $('<div></div>').attr("class", "conte").attr("id", "tercer");
  for (let index = 0; index < muestra.length; index++) {
    var ases = $('<a></a>').attr("class", "but3")
      .attr("onClick", "cargarlado('" + tipo + "','cajon" + num + "','" + index + "','" + muestra.length + "')")
      .attr("id", "seccion" + index).html("" + muestra[index]["name"]);
    divi.append(ases).hide();
  }
  $("#segun").append(divi);
  divi.fadeToggle(150, function() {
    resizePpal();
  });


}

/////////////////////////////////////////////Funciones de la Barra DETALLES

function cargarlado(clase, cajon, num, nummuestra) {

  if ($("#divdesc").length) {
    $("#divdesc").remove();
  }
  var muestra;
  nummuestra = parseInt(nummuestra, 10);
  lupaoff();

  if (clase == "micro") {
    muestra = muestras[clase][cajon][num];
    $('#segun .but2').attr("class", "but2");
    $('#seccion' + num).toggleClass("active");
  } else {
    muestra = muestras["macro"][clase][cajon]["muestras"][num];
    $('#tercer a').attr("class", "but3");
    $('#seccion' + num).toggleClass("active");
  }

  if (clase != "micro") {
    $('#titulo').html(muestra["name"]);
    cargafoto(muestra["name"]);
  } else {
    $('#titulo').html(muestra["name1"]);
    cargafoto(muestra["name1"]);
    var divs = $('<div></div>').attr("id", "divdesc");
    if (muestra["min"] != 0) {
      divs.append($('<li></li>').append($('<p></p>').html("<b>Minerales</b><br>" + muestra["min"])
        .attr("class", "text")));
    }
    if (muestra["desc"] != 0) {
      divs.append($('<li></li>').append($('<p></p>').html("<b>Descripción</b><br>" + muestra["desc"])
        .attr("class", "text")));
    }
    if (muestra["texg"] != 0) {
      divs.append($('<li></li>').append($('<p></p>').html("<b>Texturas Generales</b><br>" + muestra["texg"])
        .attr("class", "text")));
    }
    if (muestra["texe"] != 0) {
      divs.append($('<li></li>').append($('<p></p>').html("<b>Texturas Específicas</b><br>" + muestra["texe"])
        .attr("class", "text")));
    }
    if (muestra["facie"] != 0) {
      divs.append($('<li></li>').append($('<p></p>').html("<b>Facies</b><br>" + muestra["facie"])
        .attr("class", "text")));
    }
    if (muestra["proto"] != 0) {
      divs.append($('<li></li>').append($('<p></p>').html("<b>Protolito</b><br>" + muestra["proto"])
        .attr("class", "text")));
    }
    if (muestra["nombre"] != 0) {
      divs.append($('<li></li>').append($('<p></p>').html("<b>Nombre</b><br>" + muestra["nombre"])
        .attr("class", "text")));
    }
    if (muestra["name2"] != 0) {
      divs.append($('<li></li>').append($('<p></p>').html("<b>Código Antiguo</b><br>" + muestra["name2"])
        .attr("class", "text")));
    }
    $("#tabladesc").append(divs);
  }
}

/////////////////////////////////////////////Funciones de la Barra FOTO

function cargafoto(name) {
  $("#foto").attr('src', "images/catalogo/" + name + ".jpg");
  $("#foto").attr('title', "" + name);
  $("#otrapestaña").attr('href', "images/catalogo/" + name + ".jpg");
  if (!$('.btn-descripcion').hasClass('active') && !$('.btn-muestra').hasClass('active')) {
    $('body').attr('class','izq');
    setTimeout(function(){ sidebarControl('descripcion') },20);
  }
}

function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /* Create magnifier glass: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");
  glass.setAttribute("id", "lupas");
  glass.setAttribute("onClick", "lupaoff()");

  /* Insert magnifier glass: */
  img.parentElement.insertBefore(glass, img);

  /* Set background properties for the magnifier glass: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  setPos(getCursorPos());

  /* Execute a function when someone moves the magnifier glass over the image: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);

  function moveMagnifier(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img.width - (w / zoom)) {
      x = img.width - (w / zoom);
    }
    if (x < w / zoom) {
      x = w / zoom;
    }
    if (y > img.height - (h / zoom)) {
      y = img.height - (h / zoom);
    }
    if (y < h / zoom) {
      y = h / zoom;
    }
    /* Set the position of the magnifier glass: */
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0,
      y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {
      x: x,
      y: y
    };
  }

  function setPos(pos) {
    var x, y;
    x = pos.x;
    y = pos.y;
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img.width - (w / zoom)) {
      x = img.width - (w / zoom);
    }
    if (x < w / zoom) {
      x = w / zoom;
    }
    if (y > img.height - (h / zoom)) {
      y = img.height - (h / zoom);
    }
    if (y < h / zoom) {
      y = h / zoom;
    }
    /* Set the position of the magnifier glass: */
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }
}

function lupaon() {
  if (auxlupa == false) {
    auxlupa = true;
    magnify("foto", 6);
  }
}

function lupaoff() {
  var lup = document.getElementById("lupas");
  if (lup) {
    lup.parentNode.removeChild(lup);
    auxlupa = false;

  }
}

  
  $(".btn-descripcion").click(function (e) { 
    e.preventDefault();
    setTimeout(function(){ sidebarControl('descripcion') },20);
  });
  
  $(".btn-muestra").click(function (e) { 
    e.preventDefault();
    sidebarControl('muestra');
  });
  
  function sidebarControl(btn) {
    if (btn=='muestra') {
      if ($('.btn-muestra').hasClass('active')) {
        $('.btn-muestra').toggleClass('active');
        $('.sidebar-right').toggleClass('active');
        $('body').toggleClass('overy_not');
        $(".breadcrumb-class").css('margin-top', 0);
        $(".tx-unal-accesibilidad").css('z-index', 1);
      }else{
        if ($('.btn-descripcion').hasClass('active')) {
          $('.btn-descripcion').toggleClass('active');
          $('.sidebar-left').toggleClass('active');
          $('body').toggleClass('overy_not');
        }
        $(".breadcrumb-class").css('margin-top', '-300px');
        $(".tx-unal-accesibilidad").css('z-index', 0);
        $('.btn-muestra').toggleClass('active');
        $('.sidebar-right').toggleClass('active');
        $('body').toggleClass('overy_not');
      }
    }
    if (btn=='descripcion') {
      if ($('.btn-descripcion').hasClass('active')) {
        $('.btn-descripcion').toggleClass('active');
        $('.sidebar-left').toggleClass('active');
        $('body').toggleClass('overy_not');
        $(".breadcrumb-class").css('margin-top', 0);
        $(".tx-unal-accesibilidad").css('z-index', 1);
      }else{
        if ($('.btn-muestra').hasClass('active')) {
          $('.btn-muestra').toggleClass('active');
          $('.sidebar-right').toggleClass('active');
          $('body').toggleClass('overy_not');
        }
        $(".breadcrumb-class").css('margin-top', '-300px');
        $(".tx-unal-accesibilidad").css('z-index', 0);
        $('.btn-descripcion').toggleClass('active');
        $('.sidebar-left').toggleClass('active');
        $('body').toggleClass('overy_not');
      }
    }
  }
  

  $(".sb-close-l").click(function () {
    t=0;
    if (!$('.btn-descripcion').hasClass('active')) {
      $('body').attr('class','izq');
    }
    setTimeout(function(){ sidebarControl('descripcion') },20);
  });
  
  $(".sb-close-r").click(function () {
    $('body').attr('class','der');
    sidebarControl('muestra');
  });