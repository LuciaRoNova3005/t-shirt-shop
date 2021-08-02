# TIENDA DE CAMISETAS

Este proyecto consite en la creación de una página de una tienda de camisetas en la que aparece un carrito de la compra / listado con los productos seleccionados usando javascript.

Este proyecto incluye un motor de plantillas HTML, el preprocesador SASS...

# # Hay 3 tipos de ficheros y carpetas:

- Los ficheros que están sueltos en la raíz del repositorio, como gulpfile.js, package.json... Son la configuración del proyecto.
- La carpeta `src/`: son los ficheros de la página web, como HTML, CSS, JS...
- Las carpetas `public/` y `docs/`, que son generadas automáticamente cuando arrancamos el proyecto. Lee los ficheros que hay dentro de `src/`, los procesa y los genera dentro de `public/` y `docs/`.

### T2: Diagrama de flujo

![Diagrama de flujo](https://user-images.githubusercontent.com/81588630/127904949-f1b2bd8b-b541-46f1-9778-56e515dab3c6.PNG)



## Guía de inicio rápido

> **NOTA:** Instalar previamente [Node JS](https://nodejs.org/) para trabajar con este repo:

### Pasos a seguir para arrancar el proyecto desde tu ordenador:

1. Crear un nuevo repositorio y añade los archivos descargados.
1. **Abre una terminal** en la carpeta raíz de tu repositorio.
1. **Instala las dependencias** locales ejecutando en la terminal el comando:

```bash
npm install
```

Una vez hemos instalado las dependencias, vamos a arrancar el proyecto.

```bash
npm start
```

Este comando:

- **Abre una ventana de Chrome y muestra la página web**
- También **observa** todos los ficheros que hay dentro de la carpeta `src/`, para que cada vez que modifiques un fichero **refresca tu página en Chrome**.
- También **procesa los ficheros** HTML, SASS / CSS y JS y los **genera y guarda en la carpeta `public/`**. Por ejemplo:

Después de ejecutar `npm start` ya puedes empezar a editar todos los ficheros que están dentro de la carpeta `src/` y programar cómodamente.

### Pasos para publicar el proyecto en GitHub Pages:

Para generar la página para producción ejecuta el comando:

```bash
npm run docs
```

Y a continuación:

1. Sube a tu repo la carpeta `docs/` que se te acaba de generar.

```bash
git add -A
git commit -m "commit message"
git push
```

Además, los comandos:

```bash
npm run push-docs
```

o

```bash
npm run deploy
```

Son un atajo que nos genera la versión de producción y hace push de la carpeta `docs/`

## Flujo de archivos con Gulp

Estas tareas de Gulp producen el siguiente flujo de archivos:

![Flujo](https://user-images.githubusercontent.com/81588630/127904985-3c6bc7a6-60d7-4c5f-925e-4bd802c881a1.PNG)

## `gulpfile.js` y `config.json`

Nuestro **gulpfile.js** usa el fichero `config.json` de configuración con las rutas de los archivos a generar / observar.

De esta manera separarmos las acciones que están en `gulpfile.js` de la configuración de las acciones que están en `config.json`.

## Estructura de carpetas

La estructura de carpetas:

```
src
 ├─ api
     └─ data.json
 ├─ html
   └─ partials
   └─ index.html
 ├─ images
 ├─ js
    └─ 00-const.js
    └─ 01-paintProducst.js
    └─ 03-Items.js
    └─ 04-localstorage.js
    └─ main.js
 └─ scss
    └─ core
    └─ layout
    └─ main.scss
```

## Falta algo?

Cualquier duda,sugerencia o consejo será bien recibida!
