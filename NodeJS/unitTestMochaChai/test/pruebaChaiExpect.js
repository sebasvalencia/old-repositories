
var expect = require('chai').expect;
var funcionAProbar = require('../index');

describe("Test con EXPECT de función sumar: ", function(){
    it("Probar función sumar dos números enteros", function(){
        result = funcionAProbar.sumar(1,3);
        expect(result).to.equal(4);
    });

    it("Probar función sumar dos números negativos", function(){
        result = funcionAProbar.sumar(-1,-4);
        expect(result).to.equal(-5);
    });
    it("Probar función sumar dos números decimales", function(){
        result = funcionAProbar.sumar(1.7,4.3);
        expect(result).to.equal(6.0);
    });
});
