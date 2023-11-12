# GRUNT

Como empezar?
* Grunt es un task runner o ejecutor de tareas en JS,   que nos permite configurar tareas automáticas y así   ahorrarnos tiempo en el desarrollo y despliegue.

* Se crea un archivo *Gruntfile* donde escribimos que tareas quremos automatizar y se escriben en formato JSON.

* Instalamos grunt:
```
npm install -g grunt
npm install -g grunt-cli
npm install --save grunt
```

* Creamos el package.json:
```
npm init
```

* Preparamos el proyecto demo:
Creamos varias carpetas:
__css__,
__img__,
__js__

* Creamos el archivo Gruntfile, donde vamos a definir y configurar las tareas.
Este es solo un módulo de node que exportamos.

* Cargamos plugins
```javascript
grunt.loadNpmTasks('plugin1');  // proporciona "tarea"
```

Se definen en tres partes:
1. Configuración de tareas
2. Cargar plugins
3. Definición de tareas personalizadas
```javascript
        //configuración tareas
        grunt.initConfig({
            tarea:{
                configuracion de la tarea
            }
        });

        //carga plugin
        grunt.loadNpmTasks('plugin1'); 

        //Definición de tareas personalizadas y se ejecutan en el orden que se pongan, default es la tarea q se ejecuta si no escogemos otra.
        grunt.registerTask('default', ['tarea1']);
```

* Vamos a definir dos tareas:
1. Concatenar archivos css y js
2. Comprimir arhciovs js 

Instalamos los plugins:
```
npm install --save grunt-contrib-concat
npm install --save grunt-contrib-uglify
```

Primero cargamos los plugins:
```javascript
//concat
grunt.loadNpmTasks('grunt-contrib-concat');

//uglify
grunt.loadNpmTasks('grunt-contrib-uglify');
```
* La mayoria de tareas hacen 3 cosas:

1. Leen un conjunto de archivos de entrada
2. Procesan estos archivos
3. Escriben un conjunto de archivos de salida

* Creamos la tarea __concatenar__:
```javascript
grunt.initConfig({
        concat: {
            css:{
                src: ['css/main.css', 'css/theme.css'],
                dest: 'css/style.css'
            },
            js:{
                options:{
                    separator:';'
                },
                src:['js/archivo1.js','js/archivo2.js'],
                dest: 'js.bundle.js'
            }
        }
    });
```
para probar la tarea:
```
grunt concat
```

* Se Puede crear plantillas y directorios de salida.

* Se coloca por último la tarea por defecto:
```javascript
grunt.registerTask('default', ['concat', 'uglify']);
```
Se puede ejecutar tareas concretas o subtareas:
```
grunt concat
grunt uglify 
grunt concat:css
```
Se ejecuta en la consola y listo:
```
 grunt
```

