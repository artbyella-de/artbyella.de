$( document ).ready(function(){
    if ($(window).width() < 767) {
        $("li.nav-item").click(function(e){
            e.preventDefault();
            loadPage($(this).attr('href'))
        });
    }
});
$( document ).ready(function(){
    if ($(window).width() < 767) {
        $(".clickable").click(function(e){
                e.preventDefault();
                loadPage($(this).attr('href'))
            });
    }
});
function loadPage(url){
    $("#content").load(url + " #content");
    $('html, body').animate({ scrollTop: 0 }, 0);
    $('button.navbar-toggler').addClass("collapsed");
    $('div.navbar-collapse').removeClass("show");
}