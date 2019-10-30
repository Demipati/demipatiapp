// ARCHIVO PRINCIPAL DEL PROYECTO
// Arranca toda la aplicación

import React from 'react'; //react general/ en minusculas
import ReactDOM from 'react-dom'; //web / navegador / ReactNative
import './index.css'; //estilo gracias a webpack este css afecta a todo el body / EStilos que afectaran a todo el contenido, WEBPACK permite importar CSS HTML y luego convertirlos a su lenguaje tradicional.

import App from './App'; //Importa App desde App.js

import * as serviceWorker from './serviceWorker'; //Simular datos de manera local, es un tipo cache, guarda los datos que estabas usando / guarda en memoria local, cuando vuelva la conexión estos datos son enviados... mas info en WPA(Aplicaciones web progresivas).

import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//Biblioteca React enfocado al navegador
//Busca en el documento - App un id "root" para pintarlo(renderizarlo )
// render es un método que permite pintar
// App es jsx 
ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
serviceWorker.unregister();
