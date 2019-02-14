var buttonMenu = document.querySelector('.menu-button'),        //находим кнопку
    menu = document.querySelector('.mobile-menu'),          //находим блок меню
    body = document.querySelector('body'), 
    closeMenu = document.querySelector('.mobile-menu__close');   


buttonMenu.addEventListener("click", function(){        //слушаем клик по кнопке
    if(menu.classList.contains('open')){              //пишем условие(если у меню уже есть класс open)
        menuBg.classList.remove('show'),
        menu.classList.remove('open'),               //удаляем класс open
        body.classList.remove('overflow');          //удаляем класс overflow у body
    } else {                                        //если нет класса open
        menu.classList.add('open'),                 //добавляем класс open 
        body.classList.add('overflow'),
        menuBg.classList.add('show');              //добавляем класс overflow для body
    }
});

closeMenu.addEventListener("click", function(){      //слушаем клик по кнопке
    if(menu.classList.contains('open')){             //пишем условие(если у меню уже есть класс open)
        menu.classList.remove('open'),              //удаляем класс open
        body.classList.remove('overflow'),
        menuBg.classList.remove('show');           //удаляем класс overflow у body
    } else {                                            //если нет класса open
        menu.classList.add('open'),                     //добавляем класс open 
        body.classList.add('overflow'),
        menuBg.classList.add('show');               //добавляем класс overflow для body
    }
});






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

