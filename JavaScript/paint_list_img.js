// Creacion de LISTA de DIBUJOS. (PAINT_LIST)
const imgList = document.getElementById("list_paint");
const background = document.querySelector('.section-container');
let imgListFragment = document.createDocumentFragment();
let x = localStorage.getItem("Grupo");



crearListPaint(x);
function crearListPaint(valor) {
  let backImg = document.createElement("IMG");
  let vlImg = valor;
  if (valor > 0 && valor <= 10) {
    for (let i = 1; i <= 5; i++) {
      let div = document.createElement("DIV");
      let a = document.createElement("A");
      let btn = document.createElement("BUTTON");
      let img = document.createElement("IMG");
      // Creando los DIV para las imagenes.
      div.classList.add(`div-dibujoElegido`, `d${i}`);
      btn.setAttribute("value", i);
      // Creando los enlaces para las ventanas.
      a.setAttribute("href", "../HTML/paint.html");
      // Creando las clases de los botones de acceso.
      btn.classList.add(`btn-d${i}`, `btn`);
      // Crear img.
      img.classList.add(`img${i}`, `img`);
      img.setAttribute(`src`, `../IMG/CVS/pgImg${vlImg}/img${i}.jpg`);

      backImg.setAttribute(`src`, `../IMG/GPAINTBG/${x}.png`);
      backImg.classList.add(`backImg`);

      // Creacion de los botones.
      btn.appendChild(img);
      a.appendChild(btn);
      div.appendChild(a);
      btn.addEventListener("click", () => {
        localStorage.setItem("Lista", btn.value);
      });
      imgListFragment.appendChild(div);
    }
    background.appendChild(backImg);
    imgList.appendChild(imgListFragment);
  } else if (valor == 12) {
    location.href = "../HTML/paint.html";
  } else if (valor == 11) {
  }
}
