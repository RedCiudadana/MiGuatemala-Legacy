# Mi-guatemala

[MiGuatemala](http://miguatemala.redciudadana.org) es una aplicación destinada a
la transparencia en materia de funcionarios públicos.

Está construida como una aplicación [Ember](http://emberjs.com/) que obtiene datos
de un [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1DnOk0jXyC-bGPG1uSUvi94tJ9zJWSBNEZWaVUYtg3LI/pubhtml)
por medio de [Tabletop](https://github.com/jsoma/tabletop), y hosteada en [GitHub Pages](https://pages.github.com/).

Dentro del repositorio existen los siguientes branches:

* `dev-ember`: desarrollo principal de la aplicación
* `gh-pages`: versión pública _built_ (de la aplicación)
* `gh-pages-old`: versión estática de la aplicación para referencia
* `master`: fuera de uso

# Instalación

## Prerequisitos

Los siguientes paquetes deberán estar instalados en el equipo:

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Instalación

* Clonar el repositorio: `git clone http://github.com/RedCiudadana/MiGuatemala.git` (esto hará _checkout_ del branch `dev-ember`)
* Acceder a la carpeta creada
* Instalar dependencias de NPM: `npm install`
* Instalar dependencias de Bower: `bower install`

## Ejecutar aplicación localmente

* Ejecutar `ember autoserve`, gracias a [ember-autoserve](https://github.com/ebryn/ember-autoserve)
* Acceder a la aplicación en [http://localhost:6360](http://localhost:6360) (configurable en el archivo `.ember-cli`).

### Construcción (building)

La publicación de la aplicación se hace mediante la construcción (_build_) de una
nueva versión, ya sea de producción o de desarrolo:

* `ember build` (desarrollo)
* `ember build --environment production` (producción)

### Publicación (deploying)

Una vez construida la versión a publicar, se debe hacer _commit_ y _push_ de los
archivos al branch `gh-pages`.

El _script_ `publish-to-github-pages.sh` automatiza el proceso de publicación a partir
de una instalación local de desarrollo.

# Estructura de archivos

La aplicación sigue la [estructura de archivos](https://ember-cli.com/user-guide/#folder-layout)
definidas por [ember-cli](https://ember-cli.com):

* `app`: contiene el código JS de la aplicación
* `public`: contiene el CSS e imágenes utilizadas
* `vendor`: contiene código JS de otras fuentes (principalmente un _wrapper_ o _shim_ para utilizar Tabletop dentro de Ember)
* `config`: contiene algunas configuraciones generales para la aplicación

Dentro de `app` se cuenta con:

# Modelos de datos

La aplicación cuenta actualmente con tres modelos de datos siguiendo el patrón definido
por [Ember data](https://github.com/emberjs/data).

* Funcionario (`app/model/funcionario`)
* Institución (`app/model/funcionario`)
* Partido (`app/model/funcionario`)

Los datos se obtienen a través del _adapter_ `spreadsheet` que hace uso del servicio
`spreadsheet` para obtener los modelos a partir de las distintas hojas del documento.

# Rutas

Las rutas se encuentran definidas en `app/router.js`: consisten básicamente en un `index`
con el listado de funcionarios y un `/funcionario` que despliega los detalles sobre
el mismo

# Estilos

Los estilos están tomados de [Candidatos](http://candidatos.gt/). Los links se pueden
encontrar en `index.html`.

# FAQs:

* ¿Cómo agregar nueva información sobre los funcionarios?

Para agregar nueva información sobre los funcionarios es necesario agregar una columna
con su información al _spreadsheet_ `funcionario`, con nombre en formato `camelCase`.

Luego es necesario agregar la propiedad al modelo `funcionario` dentro de Ember Data
definido en `app/models/funcionario.js`.

Finalmente será posible utilizar el nuevo campo en `app/templates/funcionario.hbs`
bajo la propiedad `model.funcionario.nuevoCampo`.

* ¿Puedo hacer modificaciones a la versión pública de la aplicación directamente desde GitHub?

No, actualmente una modificación a la aplicación requiere que se haga un _build_
de la nueva versión de la aplicación, que por el momento solo puede hacerse en un
entorno local.

# TODOs:

Algunos aspectos pendientes de trabajar son:

* Implementar la funcionalidad de ordenamiento y búsqueda de funcionarios por institución
* Aplicar reglas de CSS para hacer simétrico el grid de funcionarios
* Implementar páginas para las organizaciones políticas
* Implementar un proceso de _deploy_ automático a partir de un _push_ a un branch específico del repositorio
