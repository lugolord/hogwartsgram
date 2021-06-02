function latido(target) {

    if ($(target).hasClass('likeIt')) {

        $(target).css({'color': 'red', 'animation-name': 'latido', 'animation-duration': '0.3s', 'animation-delay': '0s'});
    }
    else {
        $(target).css({'color': 'black', 'animation-name': 'latido', 'animation-duration': '0.3s', 'animation-delay': '0s'});
    }
}

function eliminarLatido(target) {

    if ($(target).hasClass('likeIt')) {

        $(target).css({'color': 'red', 'animation-name': '', 'animation-duration': '', 'animation-delay': ''});
    }
    else {
        $(target).css({'color': 'black', 'animation-name': '', 'animation-duration': '', 'animation-delay': ''});
    }
}