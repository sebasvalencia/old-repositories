//Importamos chai y el archivo que tiene la funcion a probar
var assert = require('chai').assert;
var funcionAProbar = require('../index');

//Se usa para definir bloques de pruebas relacionadas entre sí
describe("Test con ASSERT interface de CHAI: ", function() {
    describe("Testear la función holaMundo", function(){
        //cada it es una prueba, Las pruebas pueden estar divididas entre varios elementos
        //de tipo “describe”. Esto es útil si queremos diferenciar varios bloques 
        //de pruebas en un mismo fichero.
        it("Probar la respuesta con assert.equal(value, 'value')", function(){
            result = funcionAProbar.holaMundo("Hola");
            assert.equal(result, "Hola Mundo");
        });
        it("Probar que la respuesta sea una cadena", function(){
            result = funcionAProbar.holaMundo("Hola");
            assert.typeOf(result, 'string');
        });
        it("Probar que ka respuesta sea un string", function(){
            result = funcionAProbar.holaMundo("Hola");
            assert.isString(result);
        });
    });
});

describe("Test con ASSERT de función sumar", function(){   
        it("Probar función sumar dos numeros enteros", function(){
            result = funcionAProbar.sumar(1,2);
            assert.equal(result, 3);
        });
        it("Probar función sumar dos numeros negativos", function(){
            result = funcionAProbar.sumar(-1,-2);
            assert.equal(result,-3);
        });
        it("Probar función sumar dos numeros decimales", function(){
            result = funcionAProbar.sumar(1.5,1.5);
            assert.equal(result, 3);
        });
        it("Probar que la respuesta es numerica", function(){
            result = funcionAProbar.sumar(2,7);
            assert.isNumber(result);
        });
        it("Probar sumar dos numeros", function(){
            result = funcionAProbar.sumar(1,2);
            assert.equal(result, 3);
        })

});


describe("Test con ASSERT de funcion retornar arreglo", function(){
    it("Probar que sea un arreglo", function(){
        result = funcionAProbar.retornarArreglo();
        assert.isArray(result);
    });
    it("Probar que no sea un objecto", function(){
        result = funcionAProbar.retornarArreglo();
        assert.isNotObject(result);
    });
    it("Probar que sea de tipo arreglo", function(){
        result = funcionAProbar.retornarArreglo();
        assert.typeOf(result, 'array');
    });
    it("Probar que incluya el numero 2", function(){
        result = funcionAProbar.retornarArreglo();
        assert.include(result, 2);
    });
});

describe("Test con ASSERT de funcion retornar objecto", function(){
    it("Probar que el objecto tenga un tipo nombre", function(){
        result = funcionAProbar.retornaObjecto();
        assert.property(result, 'nombre');
    });
    it("Probar que tenga un tipo anidado", function(){
        result = funcionAProbar.retornaObjecto();
        assert.nestedProperty(result, 'direccion.pais');
    });
});