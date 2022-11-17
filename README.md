# Construccion de Interfaces - PetShop "Osiris"

# Parcial 2 - Construcción de Interfaces de usuarios.

El objetivo del parcial es hacer una página WebApp prototipo en react para un PetShop. El enfoque está en la usabilidad, navegación, ser responsive, y aplicar la buenas practicas de programacion. También buscamos aplicar lo aprendido hasta el momento en la cruzada.

# Resumen

Para el proyecto se utilizo "react" una biblioteca de java scrip para construir interfaces de usuarios.
El cual nos permite integrar Html, Css, Jss y agrega funcionalidades del mismo, se invoca una api, utilizamos hook para guardar estados, una libreria para maquetado y estilo, guardado de informacion en el local stoge, navegacion entre distintas paginas, creacion de componentes.

# Mas Detalle

Para darle estilo y maquetado utilizamos la libreria de material UI.

Creamos componentes para cada item de la pagina en la carpeta componentes pueden observar cada uno.

A continuacion contaremos un poco lo implementado en cada componente.

*Header*
El mismo es el cabezal de la pagina.
Se puede usar para la navegacion y como punto de referencia en cada ruta.

Dentro del componente:
Se puede encontrar una lista con las distintas rutas a la cual se puede acceder y su funcionalidad. 

*Header*
El mismo es el pie de la pagina.
Se usa para la navegacion hacia las redes sociales y apreciar los derechos de autor

Dentro del componente:
Se encuentra su funcionalidad

*Home*
La misma fue creada para ser el inicio / index de la pagina.

Dentro del componente:
Aplicamos el uso de hook tanto useState como useEffect
Aqui invocamos una api para la imagen que se ve en la misma utilizando fetch.
Y distintas etiquetas del framework utilizado para maquetar y dar estilo.

*Conocenos*
El mismo fue creado para dar informacion extra del cliente ( petShop "Osiris").

Dentro del componente:
Se encuentra su funcionalidad

*Formulario*
Aqui podemos apreciar un prototipo del formulario que habria que llenar para reservar un turno.

Dentro del componente:
Se encuetra su funcionalidad
Aplicamos el uso de hook useState
Creamos funciones para el submit del form y acciones extras necesarias.
Aplicamos buenas practicas, como utilizar la etiqueta que refencia al mismo, validacion de errores, controlamos en envio de datos.

*Carrito*
Aqui podemos apreciar un prototipo de un carrito de compras.

Dentro del componente:
Creamos funciones.
Tenemos 2 distintos estados para el titulo.
Agregamos la funcionalidad de eliminar productos del mismo.

Podemos observar su funcionalidad el mismo si esta vacio muestra un titulo diferente al que cuando esta cargado.
Se genera una lista de los productos seleccionados en la tienda.

*ProductItem*
Aqui podemos apreciar un coponente customizable. La idea el mismo es mostrar productos con una maquetado predeterminado, el mismo acepta distintas variables para ser modificada su vista y poder reutilizarlo.

Dentro del componente:
Se encuentra su funcionalidad

*App.js*

En este archivo se puede apreciar la magia de la aplicacion. 
En el mismo se encuentra hook de estado y efecto (useState or useEffect), de estado para crear y modificar la lista del carrito de compras, de efecto para guardar el carrito en el local storage.
Tambien podemos ver el uso de la libreria "react-router-dom" la cual nos ayuda a tener distintas pantallas y rutas dentro de nuestra pagina web

Universidad: UnaHur (Universidad Nacional de Hurlingham) Alumno: Robles Luciano Gabriel Turno: Nocturno
