const usuariosApi = 'https://hp-api.herokuapp.com/api/characters';
$.get(usuariosApi, function (respuesta, estado) {
    if (estado === 'success') {
        let usuarios = respuesta;
        for (const usuario of usuarios) {
            $('#historias').append(`<div class="col-3">
                                        <img src="${usuario.image}" class="usuarioMiniatura" style="border-radius: 50%;">
                                        <p style="font-size: 12px; overflow-x: hidden;" class="text-nowrap">${usuario.name}<p>
                                    </div>`);
        }
    }        
});
