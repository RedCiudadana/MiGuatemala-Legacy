(function($) {
  $(function() {
    
    var funcionarios;

    // Cargar a todos los fulanos del json data file
    $.getJSON('data/data.json')
      .done(function(data) {
        funcionarios = data.data;

        funcionarios.forEach(function(funcionario) {

          // Crear los HTML elements con la info
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
                    .text(
                      funcionario['cargo']['nombre-completo'] ?
                        funcionario['cargo']['nombre-completo'] :
                        'Valor por defecto para \'cargo.nombre-completo\''
                    )
                )
            )
            .append(
              $('<span>')
                .append(
                  $('<a>')
                    .attr('href', '#')
                    .text(
                      funcionario['institucion']['nombre-completo'] ?
                        funcionario['institucion']['nombre-completo'] :
                        'Valor por defecto para \'institucion\''
                    )
                )
                .append(', ')
                .append(
                  $('<a>')
                    .attr('href', '#')
                    .text(
                      funcionario['cargo']['nombre-corto'] ?
                        funcionario['cargo']['nombre-corto'] :
                        'Valor por defecto para \'cargo\''
                    )
                )
            );


            // Appendear los HTML elements al container #portfolio
            $('#portfolio').append(
              $('<article>')
              .addClass('portfolio-item pf-media ' + funcionario['institucion']['codigo'])
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


