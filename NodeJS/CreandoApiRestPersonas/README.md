# API REST de personas

## Creación del proyecto e instalación:
Se crea un proyecto y se llena las preguntas que sean relevantes:
```
npm init
```
Revisar que se cree el archivo package.json.

Se instala:
```
npm install express --save
npm install body-parser --save
npm install mongoose --save
npm install nodemon --save
```

En el package.json, colocar en scripts:
```
"start": "nodemon index.js"
```

Descargamos e instalamos mongodb.
Creamos dos carpetas:
```
D:\data\db
```

Corremos mongo en consola:
```
mongod
```
o en la ruta:
```
C:\Program Files\MongoDB\Server\3.4\bin
```
y ejecutamos el **mongod.exe**

En otra consola abrimos el shell de mongo:
```
mongo
```

Para correr el servidor abrir consola y escribir:
```
npm start
```

## Creamos tres carpetas:
**controllers:** donde estan funciones que se comunican con node y la bd
**routes:** donde se tiene las rutas y se usa un router express
**models:** donde estan los esquemas de bd

## Empezamos por el _**index.js**_:
importamos mongoose
importamos app
importamos config
Creamos la conexion a BD y colocamos a escuchar el servidor

## Seguimos con el _**app.js**_:
importamos express
importamos body-parser
creamos un objecto tipo express
importamos el api routes
use bodyParser
use api
exportamos el modulo

## Seguimos con el _**config.js**_:
creamos un modulo que se exporte con dos variables
el puerto del servidor
y la conexion a la bd

## Seguimos con el _**routes/index.js**_:
importamos express
importamos el controlador
creamos una constante api para los router
creamos las definiciones REST api.OPERACION(RUTA, METODOCTRL)
exportamos el modulo api

## Seguimos con el _**models/person.js**_:
importamos mongoose
creamos un schema
creamos el esquema PersonSchema
exportamos el modelo

## Seguimos con el _**controllers/index.js**_:
 importamos el modelo person
 creamos la funcion getPersons
 creamos la funcion getPerson
 creamos la funcion postPersons
 creamos la funcion putPersons
 creamos la funcion deletePersons
