# Reto Tecnico Fullstack Pokedex
## * Proyecto Frontend

## Pasos para intalacion y funcionamiento de proyecto frontend

Este projecto requiere [Node.js](https://nodejs.org/) para funcionar.

> Nota: en este proyecto, se puede utilizar el backend a nivel local, o se puede utilizar el backend desplegado en la nube, en el paso numero "paso" se explicara como implementar la URL del backend que se encuentra en la nube hosteado en "render.com"

## 1. Clonar el respositorio del proyecto del backend (Opcional):
Este paso es opcional ya que tambien existe una api desplegada en "render.com", pero si desea descargar el backend y usarlo a nivel local procederemos a explicarle los pasos.
Para clonar el repositorio que se encuentra en el respositorio de github es necesario abrir una terminal cualquiera de su preferencia, Bash, Power Shell, queda a su discrecion.
Una vez abierta la terminal, hay que hacer un cd a la carpeta en la que queremos almacenar el proyecto, una vez estando en la carpeta en la que se almacenara el proyecto, hay que ejecutar el siguiente comando:
```sh
git clone https://github.com/MemoSan27/reto-tecnico-3-backend <project_local_name>
```
> Nota: el apartado `<project_local_name>` es opcional, este sirve para poner un nombre personalizado al repositorio, si no necesita cambiar el nombre, solamente hay que copiar el comando de clonacion de la siguiente manera:
```sh
git clone https://github.com/MemoSan27/reto-tecnico-3-backend 
```

> Nota: los pasos para hecar a andar el backend, estan explicados en el archivo `README.md` del proyecto backend.

## 2. Clonar el respositorio del proyecto del frontend:
Si usted eligio la opcion de usar el backend a nivel local, y el servidor ya se encuentra corriendo, lo siguiente sera clonar en su computadora el proyecto frontend desde github.com con el siguiente comando:
```sh
git clone https://github.com/MemoSan27/reto-tecnico-3-frontend <project_local_name>
```
> Nota: el apartado `<project_local_name>` es opcional, este sirve para poner un nombre personalizado al repositorio, si no necesita cambiar el nombre, solamente hay que copiar el comando de clonacion de la siguiente manera:
```sh
git clone https://github.com/MemoSan27/reto-tecnico-3-frontend 
```

## 3. Abrir visual studio code
Una vez clonado el respositorio, debemos abrir la carpeta clonada en nuestro visual studio code para comenzar las instalaciones previas.

## 4. Instalacion de modulos de node  
Una vez abierto visual studio code, debemos abrir una terminal ya sea en el proyecto o afuera del proyecto, es importante mencionar que debemos estar en la carpeta del proyecto para poder ejecutar el siguiente comando:
```sh
npm install
```

## 5. Configurar variable de entorno
Este paso es de vital importancia ya que si no se hace de la manera correcta, el proyecto no podra inicializarse de forma correcta.

Iniciaremos explicando que tenemos dos opciones de variable de entorno, la primera es si seleccionamos la opcion del backend a nivel local y la segunda es si hemos elegido la opcion del backend proveniente de "render.com".

El primer paso que hay que hacer, es ubicar el archivo `.env.template` que se encuentra en la raíz de nuestro proyecto, hay que copiar ese archivo y pegar una copia de igual manera en la raíz del proyecto.

Al pegar en la raiz del proyecto la copia de el archivo ".env.template", hay que cambiar el nombre y su nombre debe quedar solamente de la siguiente manera:
```sh
.env
```
Una vez creado este nuevo archivo ".env" debemos asignar un valor a la variable `VITE_API_URL` el cual tendra 2 valores dependiendo de que opcion de backend hemos elegido para trabajar.

- Si selecciono la opcion de trabajar con el backend a nivel local la variable debe guardarse en el archivo `.env` de la siguiente manera y SIN ESPACIOS:
>`VITE_API_URL=`http://localhost:3001

>Nota: si usted cuando instalo el backend, eligio trabajar en un puerto diferente al 3001, solo hay que hacer el cambio respectivo y reemplazar el 3001 por el puerto de su eleccion

- Si selecciono la opcion de trabajar con el backend en la nube la variable debe guardarse en el archivo `.env` de la siguiente manera y SIN ESPACIOS:
>`VITE_API_URL=`https://reto-tecnico-backend2.onrender.com

## 6. Inicializar el proyecto frontend
Este es el ultimo paso en el cual vamos a correr nuestro servidor de desarrollo para poder utilizar ya este proyecto frontend ya sea en el que le brindamos o en su propio proyecto personal frontend simplemente usando nuestros endpoints.
Para lograr la inicializacion del servidor debemos ejecutar el siguiente comando:
```sh
npm run dev
```

> Con estos sencillos pasos hemos llegado al final del manual de instalacion del proyecto, cualquier duda o problema favor de notificar al desarrollador del proyecto.

