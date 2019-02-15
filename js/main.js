var body = document.querySelector('body');


//плавная прокрутка по якорям
$(document).ready(function(){ 
    //слушаем клик по тегу а в блоке .site-navigation 
    $(".site-navigation").on("click","a", function (event) { 
	    //забираем идентификатор блока из атрибута href 
	    var id = $(this).attr('href'), 
	    //узнаем высоту от начала страницы до блока на который ссылается якорь 
	    top = $(id).offset().top; 
	    //анимируем переход на расстояние - top за 1500 мс 
	    $('body,html').animate({scrollTop: top}, 1500); 
    });
});

//плавная прокрутка по якорям
$(document).ready(function(){ 
    //слушаем клик по тегу а в блоке .site-navigation 
    $(".mobile-menu__list").on("click","a", function (event) { 
	    //забираем идентификатор блока из атрибута href 
	    var id = $(this).attr('href'), 
	    //узнаем высоту от начала страницы до блока на который ссылается якорь 
	    top = $(id).offset().top; 
	    //анимируем переход на расстояние - top за 1500 мс 
	    $('body,html').animate({scrollTop: top}, 1500); 
    });
});

$('button').on('click', function(){
  $('body').toggleClass('open');
});

$(function() {
    $(document).ready(function() {
        $(".mobile-menu__list").on("click","a", function (event) {
            $('body').removeClass('open');
        });
    });
})


