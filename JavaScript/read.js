// Conexion con el div container.
const divRead = document.querySelector(".div-main_read");
// Conexcion con el boton de lectura deltexto.
const btnTextoVoz = document.querySelector(".btn-textoVoz");
// Cracion del document fragment.
const divReadFragment = document.createDocumentFragment();

// Obtencion de datos del localStorage.
const libro = localStorage.getItem("banner");
const titulo = localStorage.getItem("titleRead");
const historia = localStorage.getItem("histRead");

// Creacion de elementos  (div, h1, p, img).
const table = document.createElement("div");
const book = document.createElement("div");
const title = document.createElement("h1");
const history = document.createElement("p");
const banner = document.createElement("div");
const img = document.createElement("img");

// Mostrar en pantalla el titulo y el parrafo.
title.innerHTML += titulo;
history.innerHTML += historia;

//Agregar las clases y atributos.
table.classList.add(`div-mesa`, `audio`);
book.classList.add(`div-libro`);
title.classList.add(`title`);
history.classList.add(`history-Container`);
history.setAttribute(`value`, historia);
banner.classList.add(`div-banner`);
img.classList.add(`img-banner`);
img.setAttribute(`src`, `../IMG/JPG/listRead/c${libro}.jpg`);

// Agregando los elementos a sus padres.
table.appendChild(book);
book.appendChild(title);
book.appendChild(history);
banner.appendChild(img);
console.log(history.value);
// Asignando evento y funcionalidad al boton lectura de texto.

// const textVoz = () => {
//   console.log(history.textContent);
//   voz = new SpeechSynthesisUtterance();

//   let voices = [];

//   d.addEventListener("DOMContentLoaded", (e) => {});
//   d.addEventListener("change", (e) => {});
//   d.addEventListener("click", (e) => {});
// };

// btnTextoVoz.addEventListener("click", textVoz);

// Cargar los elementos al document fragment.
divReadFragment.appendChild(table);
divReadFragment.appendChild(banner);

// Cargar el document fragment al elemento principal.
divRead.appendChild(divReadFragment);
