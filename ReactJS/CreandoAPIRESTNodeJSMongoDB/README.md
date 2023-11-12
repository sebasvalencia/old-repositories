# Creando API REST con NodeJS y MongoDB

## Instalar express
En la terminal escribimos:
```
npm init
```
enter en todos los campos y completamos los campos autor y licencia MIT
genera un archivo **package.json** con la información suministrada

Crear el archivo .gitignore y escribir:
```
# dependencies
/node_modules
```

Ahora instalar express nos facilita el desarrollo para las peticiones http:
```
npm install express --save
```

Creamos el archivo **index.js** , es el punto de entrada de la aplicacion, importamos express y creamos un servidor
para correrlo en consola:
```
node index.js
```
Instalando body-parser y nodemon::
```
npm i -S body-parser
```
Permite que cuando hagamos peticiones rest se pueda parsear el cuerpo de la peticion podamos recoger los datos, por ejemplo ingresarlos a una bd, Funciona como middleware

importamos el bodyParser
y permitimos q express lo use
Porbamos

instalalos nodemon para que no tengamos q reiniciar el servidor manualmente,  se instala en devDependencies del  package.json
```
npm i -D nodemon
```
para usarlos en script del **package.json**
colocar :
```
"start": "nodemon index.js",
```
y en la consola:
```
npm start
```

## Metodos HTTP y codigos de respuesta utilizados en la API REST::

para q el api sea restfull
get
post
delete
put

__***GET***__
pedimos datos al servidor
pedimos la url
GET url y el servidor responde con los datos q necesite

__***POST***__
enviamos datos al servidor
los datos viajan en el cuerpo del mensaje
en el servidor accedemos al cuerpo de la peticion

__***DELETE***__
una peticion para borrar un recurso

__***PUT***__
hacer una actualizacion de un recurso

## Los codigos de respuesta son los q devuelve el servidor
1xx informativas
2xx ok
3xx Redireccion
4xx error causado por el cliente
5xx error causado por el servidor


## Cómo instalar MongoDB y utilizar Mongoose como ODM
descargar e instalar mongodb
```
npm i -S mongoose
```
Antes crear dos carpetas:
```
D:\data\db
```
arrancar mongo en consola escribe:
```
mongod
```
en otra terminal ecribir:
```
mongo
```
 y ya estariamos en la shell de mongo

## REFACTORIZACION
 separamos en diferentes carpetas
 __***index.js***__
 Pedir la informacion, se conecta a la BD y pone a escuchar nuestro servidor de express usa config.js

 __***config.js***__
 Tiene un objecto js que tiene datos del puerto y servidor de bd

 __***app.js***__
 tiene la configuracion de express usamos el modulo api que esta en Routes/index.js

 __***routers/index.js***__
 Tenemos las rutas y usamos un router de express usamos controllers/product.js

 __***controllers/product.js***__
 Los controladores que son las funciones que se comunican con node y la BD llaman a el modelo
 del producto models/product.js

 __***models/product.js***__
 tiene la definicion del modelo

# Creando un modelo User con mongoose
Creamos el modelos User.js
e instalamos npm install bcrypt-nodejs --save
password: {type:String, select:false} el select para q cuando hagamos un get nos envie la contraseña al cliente para evitar problemas de seguridad

instalamos crypto
npm install crypto --save

MOdelamos el obj usuario ,
autenticarse y registrarse,
passportjs nos permite hacer una autenticacion facilita

Lo mejor es usar token el usu envia un codigo al servidor , el servidor se encarga de traducirlo y ve q usuario es. No se guardan sesiones .

Lo mas usado son los JWT
queda almacenado en el localstorage
tiene 3 partes
cabecera tiene dos partes:
alg -> algoritmo ej HS256
typ-> tipo ej JWT

payload tiene n partes:
 datos q se envian al servidor
sub-> id con q se identifica en el servidor ,no sea el alamacenado en mongodb
name-> nombre
admin -> true

firma de verificacion:
verifica q sea un token valido
codifica la cebecera, el payload y el secret q es almacenado en el servidor

En node usamos npm jwt-simple
se le pasa el payload y el secret el se encarga de codificar


## Como crear un JSON Web Token JWT en tu API REST
instalar la libreria
npm install --save jwt-simple
Creamos un nuevo controlador auth.js
Se va a encargar del registro y autenticacion de usuarios de nuestro api REST
Creamos dos funciones
signUp, signIn y las exportamos

Creamos los servicios services/index.js
Los servicios son funciones q nos ayudan en varios momentos

permite el manejo de fechas en js
Instalamos npm install --save moment
en el config creamos: SECRET_TOKEN: 'miclavedetokens'

## Proteger rutas en tu API REST

Crear middleware auth q protega algunas rutas
Como pasamos el middleware a una rutaq solo sea valida
en routes/index.js 
creamos una ruta y antes del llamado de la funcion lo ponemos

Cómo proteger rutas en tu API REST con JSON Web Tokens
llama primero al middleware 
comprueba la autorizacion, si no existe envia mensaje de error
si existe toma el token lo decodifica mira q no haya caducado
en el payload , autoriza q el usuario tiene el payload

creado una funcion de sigup los guarda en al bd y proporciona un token y pueda acceder a rutas q se le asignen

la funcion sigin q un usuario ya esta registrado y queremos acceder , creamos un token para q acceda

Separamos el codigo q utilizaba la lib de jwt 
par la fun q crea token y la que lso decodifica









