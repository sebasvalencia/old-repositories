# Pruebas unitarias usando Mocha y Chai

Ejecutamos y llenamos la información que se solicita:
```
npm init
```

Instalamos mocha:
>**Mocha** es un framework de pruebas que se ejecuta en node.js , nos proporciona muchas utilidades para la ejecución y los reportes de los tests.

```
npm install mocha --save
```

Ahora instalamos chai:
```
npm install chai --save
```
>**Chai** es una librería de aserciones, tiene varias interfaces:
 **assert**,**expect**,**should**, que permiten que se puede hacer pruebas de diferente manera.

**Assert:**
```javascript
assert.typeOf( foo, 'string', 'foo is a string' );
assert.equal( foo, 'bar', 'foo equal `bar`' );
assert.lengthOf( foo, 3, 'foo`s value has a length of 3' );
```
**Expect:**
```javascript
expect( foo ).to.be.a( 'string' );
expect( foo ).to.equal( 'bar' );
expect( foo ).to.have.length( 3 );
```
**Should:**
```javascript
foo.should.be.a( 'string' );
foo.should.equal( 'bar' );
foo.should.have.length( 3 );
```

Ahora si a escribir el código:
Creamos una función par la que vamos a definir los test unitarios:
```javascript
exports.pruebaConcatenar = function(valor){
    return valor + "prueba";
}
```

Prueba usando CHAI:
```javascript
//Importamos chai y el archivo que tiene la funcion a probar
var assert = require('chai').assert;
var funcionAProbar = require('../index');

//Se usa para definir bloques de pruebas relacionadas entre sí
describe("Test con ASSERT interface de CHAI: ", function() {
    describe("Testear la función pruebaSumar", function(){
        //cada it es una prueba, Las pruebas pueden estar divididas entre varios elementos
        //de tipo “describe”. Esto es útil si queremos diferenciar varios bloques 
        //de pruebas en un mismo fichero.
        it("Probar la respuesta con assert.equal(value, 'value')", function(){
            result = funcionAProbar.pruebaConcatenar("texto de ");
            assert(result, "texto de prueba");
        });
    });
});
```

