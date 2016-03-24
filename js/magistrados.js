(function($) {
  $(function() {
    
    var funcionarios;

    // Cargar a todos los fulanos del json data file
    $.getJSON('data/data.json')
      .done(function(data) {
        funcionarios = data.data;

        funcionarios.forEach(function(funcionario) {

          // TODO: Crear los HTML elements con la info
          var fotoFuncionarioUrl = funcionario['foto-funcionario'] ?
            funcionario['foto-funcionario'] :
            'images/magistrados/Congreso/Magistrado.jpg';

          var funcionarioImageWidget = $('<div>')
            .addClass('portfolio-image')
            .append(
              $('<a>')
                .attr('href', 'portfolio-single.html')
                .append(
                  $('<img>')
                    .prop('alt', funcionario['institucion'])
                    .attr('src', fotoFuncionarioUrl)
                )
                .append(
                  $('<div>')
                    .addClass('portfolio-overlay')
                    .append(
                      $('<a>')
                        .addClass('left-icon')
                        .attr('href', fotoFuncionarioUrl)
                        .attr('data-lightbox', 'image')
                        .append($('<i>').addClass('icon-line-plus'))
                    )
                    .append(
                      $('<a>')
                        .addClass('right-icon')
                        .attr('href', 'portfolio-single.html')
                        .append($('<i>').addClass('icon-line-ellipsis'))
                    )
                )
            );

          var funcionarioDescWidget = $('<div>')
            .addClass('portfolio-desc')
            .append(
              $('<h3>')
                .append(
                  $('<a>')
                    .attr('href', 'portfolio-single.html')
                    // TODO: Revisar que field de la estructura de datos deberíamos
                    // desplegar aquí, ya que 'cargo' parece traer la versión abreviada
                    // (por ejemplo 'Titular') en lugar de la descripción extendida
                    // que sugiere la versión estática (por ejemplo 'Magistrado Titular CC')
                    .text(funcionario['cargo'] ?
                      funcionario['cargo'] :
                      'Valor por defecto para \'cargo\''
                    )
                )
            )
            .append(
              $('<span>')
                .append(
                  $('<a>')
                    .attr('href', '#')
                    .text(funcionario['institucion'] ?
                      funcionario['institucion'] :
                      'Valor por defecto para \'institucion\''
                    )
                )
                .append(', ')
                .append(
                  $('<a>')
                    .attr('href', '#')
                    .text(funcionario['cargo'] ?
                      funcionario['cargo'] :
                      'Valor por defecto para \'cargo\''
                    )
                )
            );


            // Appendear los HTML elements al container #portfolio
            $('#portfolio').append(
              $('<article>')
              // TODO: Cuando ya se tengan la organización de fulanos por institución
              // hay que agregar aquí una clase de CSS para identificar al fulano con
              // la institución
              .addClass('portfolio-item pf-media')
              .append(funcionarioImageWidget)
              .append(funcionarioDescWidget)
            );
        });
      })
      .fail(function(jqxhr, textStatus, error) {
        var err = textStatus + ', ' + error;
        console.log('Request failed: ' + err);
      });

    // TODO: Crear estructura de datos para organizar a los fulanos por institucion

    // Crear links para las instutciones disponibles y appendearlos a #portfolio-filter
  });
})(jQuery);


