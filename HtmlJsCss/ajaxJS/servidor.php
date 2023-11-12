<?php

//Arreglo con nombres
$a[] = "Anna";
$a[] = "Brittany";
$a[] = "Cinderella";
$a[] = "Diana";
$a[] = "Eva";
$a[] = "Fiona";
$a[] = "Gunda";
$a[] = "Hege";
$a[] = "Inga";
$a[] = "Johanna";
$a[] = "Kitty";
$a[] = "Linda";
$a[] = "Nina";
$a[] = "Ophelia";
$a[] = "Petunia";
$a[] = "Amanda";
$a[] = "Raquel";
$a[] = "Cindy";
$a[] = "Doris";
$a[] = "Eve";
$a[] = "Evita";
$a[] = "Sunniva";
$a[] = "Tove";
$a[] = "Unni";
$a[] = "Violet";
$a[] = "Liza";
$a[] = "Elizabeth";
$a[] = "Ellen";
$a[] = "Wenche";
$a[] = "Vicky";

//Obtener el parametro de la URL
$valorABuscar = $_REQUEST['valor'];

$pista = "";

//Busca todas las pistas en el arreglo si $valorABuscar es diferente de ""
if($valorABuscar !== ""){
    $valorABuscar = strtolower($valorABuscar);
    $longitud = strlen($valorABuscar);

    foreach ($a as $valor) {
        if(stristr($valorABuscar, substr($valor, 0 , $longitud))){
            if($pista === ""){
                $pista = $valor;
            }else{
                $pista .= "," + $valor;
            }
        }
    }
}

echo $pista === "" ? "Sin sugerencia" : $pista;
