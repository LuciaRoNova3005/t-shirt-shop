# SHIRT SHOP

This project consists of creating a page for a t-shirt store.

![image](https://user-images.githubusercontent.com/81588630/138904869-d90373f2-c077-440b-bd37-704142259017.png)

In which a shopping cart / list appears with the products selected using javascript.
You can add or remove the products from the shopping cart and calculate the total price.

### INDEX

1. [Data structure](#Data-structure)
2. [Flowchart](#Flowchart)
3. [Local Storage](#Local-storage)
4. [About the proyect](#About-the-proyect)

![image](https://user-images.githubusercontent.com/81588630/138905414-b6af9b4c-a09c-435e-ac76-1dcc9e0c349e.png)

## 1.Data structure

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
    └─ 02-Items.js
    └─ 03-localstorage.js
    └─ 04-start.js
    └─ data.json
    └─ main.js
 └─ scss
    └─ core
    └─ layout
    └─ main.scss
```

## 2.Flowchart

![Flowchart](https://user-images.githubusercontent.com/81588630/127904949-f1b2bd8b-b541-46f1-9778-56e515dab3c6.PNG)

## 3.Local Storage

The shopping list must be stored in the local storage allowing the user to retrieve their shopping list

## About the proyect

This project includes an HTML template engine, the SASS preprocessor ...

### There are 3 types of files and folders:

- The files that are loose in the repository root, like gulpfile.js, package.json ... They are the project's configuration.
- The `src /` folder: are the files of the web page, such as HTML, CSS, JS ...
- The `public /` and `docs /` folders, which are automatically generated when we start the project. It reads the files inside `src /`, processes them and generates them inside `public /` and `docs /`

## Quick Start Guide

> **NOTE:** Pre-install [Node JS] (https://nodejs.org/) to work with this repo:

### Steps to follow to start the project from your computer:

1. Create a new repository and add the downloaded files.
2. ** Open a terminal ** in the root folder of your repository.
3. ** Install the local dependencies ** by executing the command in the terminal:

```bash
npm install
```

Once we have installed the dependencies, we are going to start the project.

```bash
npm start
```

This command:

- **Open a Chrome window and show the web page**
- Also **observe** all the files that are inside the `src /` folder, so that every time you modify a file **it refreshes your page in Chrome**.
- It also **processes the** HTML, SASS / CSS and JS files and **generates and saves them in the `public /`** folder. For example:

After executing `npm start` you can start to edit all the files that are inside the`src /`folder and program comfortably.

### Steps to publish the project on GitHub Pages:

To generate the page for production run the command:

```bash
npm run docs
```

And then:

1. Upload the `docs /` folder that was just generated to your repo.

```bash
git add -A
git commit -m "commit message"
git push
```

Also, the commands:

```bash
npm run push-docs
```

o

```bash
npm run deploy
```

Son un atajo que nos genera la versión de producción y hace push de la carpeta `docs/`

## File flow with Gulp

These Gulp tasks produce the following file stream:

![Flujo](https://user-images.githubusercontent.com/81588630/127904985-3c6bc7a6-60d7-4c5f-925e-4bd802c881a1.PNG)

## `gulpfile.js` y `config.json`

Our ** gulpfile.js ** uses the `config.json` configuration file with the paths of the files to generate / observe.

In this way we separate the actions that are in `gulpfile.js` from the configuration of the actions that are in` config.json`.

## Something is missing?

Any questions, suggestions or advice will be well received!
