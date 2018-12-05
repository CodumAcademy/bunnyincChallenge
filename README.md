# Bunny Inc Challenge

El codigo del programa en index.js lee un archivo CSV e inserta su contenido en una tabla en sqlite.
Este reto consiste de refactorizar el codigo para que tarde lo menos posible en insertar
los registros del csv, de tal manera que cada visitante solo se inserte una vez en la tabla,
para garantizar esto la tabla tendra un indice UNIQUE en la columna email, que no permitira
usuarios repetidos.

El participante o equipo que logre el menor tiempo de inserción de los registros en la tabla sera el ganador del reto.


## Para correr el programa corra lo siguiente
* npm install
* npm run start
