

//Para asegurarnos el tipo de dato typeof

function identifica(param){
    //console.log(typeof param);//nos dice q tipo de dato es
    if(typeof param == "function"){
        param();
    }else{
        console.log(param);
    }

    //false si no es , true si es de tipo Persona
    console.log(param instanceof Persona);

}

function Persona(){
    this.nombre = "Fernando";
    this.edad = 30;
}
var juan = new Persona();



identifica(1);//Number
identifica("");//string
identifica({}); //objecti
identifica(juan);   //Objecto
identifica(function(){ console.log("soy anonima");}); //function


















