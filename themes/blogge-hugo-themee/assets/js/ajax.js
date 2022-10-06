$(function(){
    if ($(window).width() < 767) {
        $("li.nav-item").click(function(e){
            e.preventDefault();
            loadPage($(this).attr('href'))
        });
    }
});

$(function(){
    if ($(window).width() < 767) {
        $(".clickable").click(function(e){
                e.preventDefault();
                loadPage($(this).attr('href'))
            });
    }
});

$(document).on("click", ".clickable", function(e){
    if ($(window).width() < 767) {
        e.preventDefault();
        loadPage($(this).attr('href'))
    }
});

function loadPage(url){
    $("#content").load(url + " #content section");
    $('a[href="/aboutlya"]:first').addClass("clickable");
    $('html, body').animate({ scrollTop: 0 }, 0);
    $('button.navbar-toggler').addClass("collapsed");
    $('div.navbar-collapse').removeClass("show");
}