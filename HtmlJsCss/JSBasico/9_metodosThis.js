
var nombre = "Juan";

var persona = {
    nombre: "Maria",
    apellido: "Dubon",
    /*imprimirNombre: function () {
        console.log("Nombre Completo " + nombre);//si se deja asi sale un error de referencia esta buscando en el objecto global
    }*/
    imprimirNombre: function(){
        //console.log(this);//este this es el objecto del contexto no el global
        console.log(this.nombre + "  " + this.apellido);
    },
    direccion:{
        pais:"Costa Rica",
        obtenerPais: function(){
            //console.log(this);//es el de direccion
            console.log( "La direccion es en " + this.pais);

            var self = this;//pasar valores por referencia 

        var nuevaDireccion = function(){
            console.log(this);
            console.log(self);
            console.log( "La direccion es en " + self.pais);//aparece undefined cuando no se le pasa el this global
        }

        nuevaDireccion();

        }
    }

};

persona.nombre = "Andres";//Hace referncia al valor q tenga la propiedad cuando es llamada

persona.imprimirNombre();

persona.direccion.obtenerPais();