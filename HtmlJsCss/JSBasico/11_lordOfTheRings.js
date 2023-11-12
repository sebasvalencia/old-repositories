

//Clase
function Jugador(nombre) {
    this.nombre = nombre;
    this.pv = 100;//puntos vida
    this.sp = 100;//especial points

    this.curar = function (jugadorObjectivo) { //jugadorObjectivo al cual curar
        if (this.sp >= 40) {
            this.sp -= 40;
            jugadorObjectivo.pv += 20;
        } else {
            console.log(`${this.nombre} no tiene sp`);
        }
        this.estado(jugadorObjectivo);
    };

    this.tirarFlecha = function(jugadorObjectivo){
        if(jugadorObjectivo.pv > 40){
            jugadorObjectivo.pv -= 40;
        }else{
            jugadorObjectivo.pv = 0;
            console.error(`${jugadorObjectivo.nombre} murio!!!`);
        }
        this.estado(jugadorObjectivo);
    };

    this.estacarConEspada = function(jugadorObjectivo){
        if(jugadorObjectivo.pv > 30){
            jugadorObjectivo.pv -= 30;
        }else{
            jugadorObjectivo.pv = 0;
            console.error(`${jugadorObjectivo.nombre} murio!!!`);
        }
        this.estado(jugadorObjectivo);
    };

    this.estado = function (jugadorObjectivo) {
        console.log(this);
        console.log(jugadorObjectivo);
    };


}

//Crear jugadores
var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");
var aragon  = new Jugador("Aragon"); 

console.log(gandalf);
console.log(legolas);

gandalf.curar(legolas);
//gandalf.curar(legolas);
//legolas.tirarFlecha(gandalf);




