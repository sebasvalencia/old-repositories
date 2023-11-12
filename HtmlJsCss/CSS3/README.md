# CSS3

Se ha dividido en módulos , que contienen la antigua especificación de CSS.

## Bordes

__border-radius__

Se puede especificar las 4 esquinas por aparte:
Todas las esquinas tendrán el mismo valor.

```css
border-radius: 25px;

border-radius: 25px 50px 75px;
```

__border-image__

Se puede crear un borde con una imagen, tiene tres partes, la imagen como borde, donde se corta y se definen las secciones donde se estira o se repite.
```css
border-image: url(borde.png) 30 round;
```

## Fondos

### Multiples fondos
Se permite agregar múltiples imagenes de fondo a un solo elemento.
La primera imagen esta al frente y las otras se separan por comas.

```css
.imagenesFondo{
    background-image: url(https://www.w3schools.com/css/img_flwr.gif), url(https://www.w3schools.com/css/paper.gif);
    background-position: right bottom, left top;
    background-repeat: no-repeat, repeat;
    height: 200px;
}
```

Se le puede colocar tamaño al fondo:
```css
background-size: 100px 150px;
```
Hay dos valores más:
__contain :__
Escala la imagen de fondo lo más larga posible.
```css
background-size: contain;
```

__cover :__
Escala la imagen toda el área que la contiene.
```css
background-size: cover;
```

__background-origin__
Define la posición de la imagen de fondo.
Hay tres valores diferentes:
* border-box: la imagen empieza desde la esquina superior izquierda.
```css
    background-origin: border-box;
```

* content-box: desde la esquina superior izquierda del contenido.
```css
        background-origin: content-box;
```

__background-clip__
Especifica el área de pintura del fondo.

* padding-box: desde la esquina superior izquierda del borde del relleno.
```css
    background-clip: padding-box;  
```
* content-box: desde la esquina superior izquierda del contenido.
```css
       background-clip: content-box;
```
