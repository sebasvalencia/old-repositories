# AJAX

## AJAX Significa:
>Asynchronous Javascript And Xml

## Caracteristicas: 
>Con ajax se puede actualizar una pagina sin recargar toda.

>Solicitar data desde el servidor.

>Recibir data desde el servidor.

Enviar data al servidor.

## Ajax usa:
Un objecto XMLHttpRequest -> peticiones
Javascript y HTML DOM -> visualizacion de la data

## Como funciona:

1. Un evento ocurre en la pagina.
2. Un objecto XMLHttpRequest es creado.
3. El objecto XMLHttpRequest envía la petición al servidor.
4. El servidor procesa la petición.
5. El servidor envia la respuesta al cliente.
6. La respuesta la lee JS.
7. JS ejecuta la acción.

# XMLHttpRequest

Todos los navegadores modernos los soportan.

Para crear un objecto:

```javascript
var xhttp = new XMLHttpRequest();
```

## Metodos del objecto XMLHttpRequest:

```abort()``` : Cancelar el request actual

```getAllResponseHeaders()``` : Retorna información del header 

```getResponseHeader()```: Retorna la información específica del header 

```open(method, url, async, user,passw) ```: Especifica la petición,
 * __method__ : El tipo de petición GET o POST
 * __url__ : la ruta del archivo
 * __async__ : *true*(async), *false*(sync)
 * __user__ : opcional nombre de usuario
 * __passw__: opcional contraseña

```send()``` : Envia la petición al servidor usando *GET*.

```send(string)```: Envia la petición al servidor usando *POST*.

```setRequestHeader()``` : Adicionar label/value al header que se va a enviar.

```setRequestHeader(header, value)``` : Adicionar HTTP header a la petición, *header* especifica el nombre del header y *value* especifica el valor del header. 

## Propiedades del XMLHttpRequest:
```onreadystatechange```: Define una función para ser llamada cuando la propiedad readyState cambia.

```readyState```: Tiene el estado del XMLHttpRequest:

0. Petición no inicializada.
1. Conexión al servidor establecida.
2. Petición recibida.
3. Petición en proceso.
4. Petición finalizada y respuesta lista.

```responseText```: Retorna la respuesta en una cadena.

```responseXML```: Retorna la respuesta en XML.

```status```: Retorna el número del estado de la petición: 

*200* : OK
*403* : Forbidden
*404* : Not Found

1xx: Information
2xx: Successful
3xx: Redirection
4xx: Client Error
5xx: Server Error

```statusText```: Retorna el texto del status "OK"...

## Acceso a los dominios:

>Por razones de seguridad los navegadores no permiten el acceso a través de dominios.

# Enviar una solicitud a un servidor GET

Para enviar una petición al servidor, usamos los metodos *open()* y *send()* : 

```javascript
var xhttp = new XMLHttpRequest(); 
xhttp.open("GET", "ajax.txt", true);
xhttp.send();
```
## Solicitud GET:

```javascript
var xhttp = new XMLHttpRequest(); 
xhttp.open("GET", "ajax_php.php", true);
xhttp.send();
```
Para no obtener un resultado almacenado en caché, se puede usar un identificador único a la URL:

```javascript
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "ajax_php.php?token="+Math.random() , true);
xhttp.send();
```
Para enviar información agregarla a la URL.

```javascript
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "ajax_php.php?nombre=Sebas", true);
xhttp.send();
```

# Enviar una solicitud a un servidor POST

```javascript
var xhttp = new XMLHttpRequest();
xhttp.open("POST", "ajax_php.php", true);
xhttp.send();
```

>Para pasar datos , se agrega una cabecera HTTP con setRequestHeader() , en el método send(), se especifican los datos:

```javascript
var xhttp = new XMLHttpRequest();
xhttp.open("POST", "ajax_php.php", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("nombre=Sebas");
```

## Propiedad onreadystatechange:

>Con XMLHttpRequest se puede definir una función que se ejecutará cuando la solicitud reciba una respuesta.

La función se define en la propiedad onreadystatechange:

```javascript
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        document.getElementById("demo").innerHTML = this.responseText;
    }
};
xhttp.open("GET", "ajax_php.php", true);
xhttp.send();
```

# Respuesta del servidor

La propiedad __readyState__ contiene el estado del XMLHttpRequest.

La propiedad __onreadystate__ define una función que se ejecutará cuando *readyState* cambie.

La propiedad __status__ y la propiedad __statusText__ contienen el estado del objecto XMLHttpRequest.

>La función onreadystatechange se llama cada vez que el readyState cambia.

>Cuando readyState es 4 y el estado es 200, la respuesta esta lista.

```javascript
functionPrueba(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadychangestate = function(){
        if(this.readyState = 4 && this.status == 200){
            document.getElementById("main").innerHTML = this.responseText;
        }
    };
}
xhttp.open("GET", "ajax_php.php", true);
xhttp.send();
```
>El evento onreadystatechange se activa cuatro veces(1-4), una vez para cada cambio en el readyState.

## Usando un callback

>Una función callback es una función que se le pasa como parámetro a otra función.
la función de llamado debería contener la URL y que función llamar cuando la respuesta este lista.

```javascript
function cambiarDatos(url, funcionCallBack) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if(this.readyState == 4 && this.status == 200){
                    funcionCallBack(this);
                }
            };
            xhttp.open("GET", url, true);
            xhttp.send();
        }

        function mostrarDatos(xhttp) {
            document.getElementById("main").innerHTML =
  xhttp.responseText;
        }
```

## Propiedades de respuesta del servidor

__responseText__ : Obtiene la respuesta como un string

```javascript
document.getElementById("main").innerHTML = xhttp.responseText;
```

__responseXML__ : Obtiene la respuesta como un xml

```javascript
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var xmlDatos = this.responseXML;
    }
}
```

## Métodos de respuesta del servidor

__getResposeHeader()__ : Retorna información específica del header
```javascript
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState = 4 && status == 200){
        document.getElementById().innerHTML =  this.getResponseHeader("Last-Modified");
    }
};
xhttp.open("GET", "ajax_php.php", true);
xhttp.send();
```

__getAllResponseHeaders()__ : Retorna toda la información del header
```javascript
var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if(this.readyState == 4 && this.status == 200){
                document.getElementById("main").innerHTML = this.getAllResponseHeaders();
            };
        }
```

# XML en AJAX

En el ejemplo pruebaXMLAjax.html , cuando la persona le da en el botón se lanza la función cargarXml(), esta crea un objecto xhttp, añade la función a ejecutar cuando la respuesta esta lista, y envia la solicitud. 

Cuando la respuesta esta lista, se construye una tabla , se extraen los nodos y se muestra en pantalla.

# Ejemplo con PHP
Cuando un usuario escribe un carácter en el campo de entrada, se ejecuta una función llamada mostrarPista.

Pasos del ejemplo:
* Se comprueba si el campo esta vacío.
* Si está vacío, elimine el contenido y sale de la función.
* Sino crea un objecto XMLHttpRequest.
* Crea la función que se ejecutará cuando la respuesta del servidor esté lista.
* Envía la solicitud al servidor PHP (servidor.php).
* A la petición se le agrega lo que se escribe en el input.

En el servidor se comprueba una matriz de nombres y devuelve los que correspondan.


# Ejemplo con Archivo:
Cuando el usuario cargue la página, se carga el elemento 0 del archivo datos.xml

Archivo: 5pruebaAjaxArchivo.html
