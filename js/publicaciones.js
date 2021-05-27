$.get(usuariosApi, function (respuesta, estado) {
    if (estado === 'success') {
        let usuarios = respuesta;
        for (const usuario of usuarios) {
            $('#publicaciones').append(`<div class="row publicacion mt-4" style="position: relative;">
                                            
                                            <div class="col-2">
                                                <img src="${usuario.image}" style="width: 30px; height: 30px; border-radius: 50%;">    
                                            </div>

                                            <p class="col-8 pl-0 font-weight-bold" style="font-size: 12px;">${usuario.name}</p>

                                            <i class="fas fa-ellipsis-v col-2 text-right"></i>

                                            <img src="${usuario.image}" class="col-12 p-0 userPost" style="max-height: 400px;">

                                            <div class="col-6 mt-1">
                                                <i class="far fa-heart pr-2 likeBtn"></i>
                                                <i class="far fa-comment pr-2"></i>
                                                <i class="far fa-paper-plane"></i>
                                            </div>

                                            <i class="far fa-bookmark col-6 mt-1 text-right"></i>

                                            <div class="col-12">
                                                <p style="font-size: 12px;" class="mb-0 font-weight-bold">le gusta a elwebomio y 100 personas mas</p>
                                                <p style="font-size: 12px; color: grey;">Ver comentarios</p>
                                            </div>

                                            <div class="col-12">
                                                <img src="example.jpg" style="width: 30px; height: 30px; border-radius: 50%;">
                                                <input type="text" placeholder="Añade un comentario..." style="font-size: 12px;" class="border-0 userComment">
                                            </div>

                                            <div class="col-12" style="font-size: 10px; color: grey;">
                                                Hace 1 hora
                                            </div>

                                            <i class="fas fa-heart fa-5x shadow-lg likeDblClick col-12 text-center" style="color: white; position: absolute; width: 50px; height: 50px; top: 200px; left: 110px;"></i>
                                            
                                        </div>`);
        }

        //BOTON LIKE
        $('.likeBtn').click(function (e) { 
            
            if ($(e.target).hasClass('likeIt')) {

                $(e.target).removeClass('likeIt fas')
                $(e.target).addClass('far');;
                $(e.target).css('color', 'black');

            }
            else {

                $(e.target).addClass('likeIt');
                $(e.target).css('color', 'red');
                $(e.target).removeClass('far');
                $(e.target).addClass('fas');

            }
            
        }); 

        //LIKE CON DOBLE CLICK
        var clicks = 0;
        $('.userPost').click(function (e) { 
            e.preventDefault();

            clicks++;

            if (clicks == 2) {
                console.log('doble click');

                $(e.target).next().children('.fa-heart').addClass('likeIt fas');
                $(e.target).next().children('.fa-heart').css('color', 'red');
                $(e.target).next().children('.fa-heart').removeClass('far');

                $(e.target).siblings('.fa-heart').animate({opacity: 1}, 200, 'linear', function () {
                    $(this).animate({opacity: 0}, 2000);
                });
                clicks = 0;
            }
            
        });

        //MENU AL PRESIONAR LOS 3 PUNTITOS
        $('.fa-ellipsis-v').click(function (e) { 

            $('header').css('opacity', '0.8');
            $('main').css('opacity', '0.5');

            $('body').off('click');

            $('.bottomMenu').animate({bottom: '250px'}, function() {
                $('body').click(function (e) { 
                    $('.bottomMenu').animate({bottom: 0}, function() {
                        $('header, main').css('opacity', '1');
                    });
                });
            });
        });
    }
});