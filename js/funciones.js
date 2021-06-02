function latido(target) {

    if ($(target).hasClass('likeIt')) { //ANIMACION AL PRESIONAR EL BOTON LIKE

        $(target).css({'color': 'red', 'animation-name': 'latido', 'animation-duration': '0.3s', 'animation-delay': '0s'});
    }
    else if ($(target).hasClass('userPost')) { //ANIMACION AL DAR DOBLETAP

        $(target).siblings('.postActions').children('.fa-heart').addClass('likeIt fas');

        $(target).siblings('.postActions').children('.fa-heart').css({'color': 'red', 'animation-name': 'latido', 'animation-duration': '0.3s', 'animation-delay': '0s'});

        $(target).siblings('.postActions').children('.fa-heart').removeClass('far');

        $(target).siblings('.fa-heart').animate({opacity: 1}, 200, 'linear', function () {
            $(this).animate({opacity: 0}, 2000);
        });

        $(target).siblings('.likesAndComments').children('.likes').html('x+1 Me gusta');
    }
    else if ($(target).hasClass('coleccion')) {
        $(target).css({'color': 'black', 'animation-name': 'latido', 'animation-duration': '0.3s', 'animation-delay': '0s'});
    }
    else { //ANIMACION AL QUITAR LIKE
        $(target).css({'color': 'black', 'animation-name': 'latido', 'animation-duration': '0.3s', 'animation-delay': '0s'});
    }
}

function eliminarLatido(target) {

    if ($(target).hasClass('likeIt')) { //ELIMINAR ANIMACION EN BOTON LIKE
        $(target).css({'color': 'red', 'animation-name': '', 'animation-duration': '', 'animation-delay': ''});
    }
    else if ($(target).hasClass('userPost')) { //ELIMINAR ANIMACION AL DAR DOBLETAP
        $(target).siblings('.postActions').children('.fa-heart').css({'color': 'red', 'animation-name': '', 'animation-duration': '', 'animation-delay': ''});
    }
    else if ($(target).hasClass('coleccion')) {
        $(target).css({'color': 'black', 'animation-name': '', 'animation-duration': '', 'animation-delay': ''});
    }
    else { //ELIMINAR ANIMACION AL QUITAR LIKE
        $(target).css({'color': 'black', 'animation-name': '', 'animation-duration': '', 'animation-delay': ''});
    }
}