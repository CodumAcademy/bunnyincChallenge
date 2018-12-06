# Bunny Inc Challenge

El código del programa en index.js lee un archivo CSV e inserta su contenido en una tabla en sqlite. Este reto consiste de refactorizar el código para que tarde lo menos posible en insertar los registros del csv, de tal manera que cada visitante solo se inserte una vez en la tabla, para garantizar esto la tabla tendrá un indice UNIQUE en la columna email, que no permitirá usuarios repetidos.

El participante o equipo que logre el menor tiempo de inserción de los registros en la tabla sera el ganador del reto.


### Para instalar los paquetes:
```sh
$ npm install
```
### Para limpiar la tabla:
```sh
$ npm run migrate
```
### Para llenar la tabla con el CSV:
```sh
$ npm run start
```
