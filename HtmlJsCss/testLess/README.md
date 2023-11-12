# LESS

* Creamos los archivos:
index.html
estilos.css
.gitignore
estilos.less
README.md
less-config.json:
colocamos el siguiente código:
```javascript
[
    {
        "input":"estilos.less",
        "output":"../estilos.css",
        "compress":"true"
    }
]
```

* Instalamos
```
npm install -g less
```

* Compilar
```
lessc estilos.less
```

* Para crear el archivo css:
```
lessc estilos.less estilos.css
```



