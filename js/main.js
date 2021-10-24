$(document).ready(function () {
    $(".btn-services").click(function (e) { 
        e.preventDefault();
        $('.btn-services').toggleClass('active');
        $('#services').toggleClass('active');
        $('body').toggleClass('active');
    });
});