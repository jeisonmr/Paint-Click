// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// Menu (Paleta de colores, Tamaño del puntero y Borrador)
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

//::::: Funcion Seleccionar color del pincel :::::
const colorsPincel = () => {
  const allColors = document.querySelector(".div-grupo_lapiz");
  const allColorsFragment = document.createDocumentFragment();

  // Paleta de colores.
  let paletColors = ["#FF0000","#E67E22","#FFEB3B","#33FF33","#145A32","#29B6F6","#1B4F72","#BA68C8","#4A235A","#E91E63","#000000","#FF00FF","#FFFFFF","#4E342E",];

  // Declaracion del ciclo.
  for (let i = 1; i <= 14; i++) {
    const divColor = document.createElement("div");
    const btnColor = document.createElement("button");

    divColor.classList.add("lp-colores");

    btnColor.classList.add(`btn-lp_color`, `color${i}`);
    btnColor.setAttribute(`value`, `${i}`);
    // Evento.
    btnColor.addEventListener("click", () => {
      // Asiganr color al pincel.
      ctx.strokeStyle = paletColors[btnColor.value - 1];
    });
    divColor.appendChild(btnColor);
    allColorsFragment.appendChild(divColor);
  }
  allColors.appendChild(allColorsFragment);
};

//::::: Funcion Seleccionar tamaño del pincel :::::
const sizePincel = () => {
  const allSize = document.querySelector(".div-puntero");
  const allSizeFragment = document.createDocumentFragment();
  // Tamaños del puntero.
  let size = ["10", "15", "25", "35"];
  for (let i = 4; i >= 1; i--) {
    const btnSize = document.createElement("button");
    btnSize.classList.add(`btn-puntero`, `puntero-${i}`);
    btnSize.setAttribute(`value`, `${i}`);
    // Evento.
    btnSize.addEventListener("click", () => {
      // Asiganr color al pincel.
      console.log(btnSize.value);
      ctx.lineWidth = size[btnSize.value - 1];
    });
    allSizeFragment.appendChild(btnSize);
  }
  allSize.appendChild(allSizeFragment);
};

//::::: Funcion Borrador :::::
const borrador = () => {
  const borrador = document.querySelector(".lp-borrador");
  const borradorFragment = document.createDocumentFragment();
  const btnBorrador = document.createElement("button");
  const imgBorrador = document.createElement("img");
  // Declaracion
  btnBorrador.classList.add(`btn-lp_borrador`);
  imgBorrador.classList.add(`img-borrador`);
  imgBorrador.setAttribute(`src`, `../IMG/PNG/borrador.png`);
  // Evento.
  btnBorrador.addEventListener("click", () => {
    ctx.strokeStyle = "#FFFFFF";
  });
  btnBorrador.appendChild(imgBorrador);
  borradorFragment.appendChild(btnBorrador);
  borrador.appendChild(borradorFragment);
};

// Ejecutar la funciona color del pincel.
colorsPincel();
// Ejecutar la funcion tamaño del pincel.
sizePincel();
// Ejecutar lña funcion borrador.
borrador();

// -----------------------------------------------------------------------------
// Codigo para (IMPRIMIR).
// -----------------------------------------------------------------------------
let imprimir = document.querySelector(".btn-printer");
const printCanvas = () => {
  let imagenURL = document.querySelector(".canvasPaint").toDataURL();
  let windowContent = "<!DOCTYPE html>";
  windowContent += "<html>";
  windowContent += "<head>";
  windowContent += "<p></p>";
  windowContent += "</head>";
  windowContent += "<body>";
  windowContent += '<img src="' + imagenURL + '">';
  windowContent += "</body>";
  windowContent += "</html>";

  let printWin = window.open();
  printWin.document.open();
  printWin.document.write(windowContent);
  printWin.document.addEventListener(
    "load",
    () => {
      printWin.focus();
      printWin.print();
      printWin.document.close();
      printWin.close();
    },
    true
  );
};
imprimir.addEventListener("click", printCanvas);

// -----------------------------------------------------------------------------
// Codigo para el (SCREENSHOT).
// -----------------------------------------------------------------------------
let screenshot = document.querySelector(".btn-camara");
const descargar = () => {
  let canvas = document.querySelector(".canvasPaint").toDataURL("image/png");
  let nombre = prompt("Nombra tu dibujo");
  let capture = new XMLHttpRequest();

  capture.responseType = "blob";
  capture.onload = () => {
    let a = document.createElement("a");
    a.href = window.URL.createObjectURL(capture.response);
    a.download = nombre;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };
  capture.open("GET", canvas);
  capture.send();
};
screenshot.addEventListener("click", descargar);

// -----------------------------------------------------------------------------
// Codigo para (BORRAR TODO).
// -----------------------------------------------------------------------------
let basura = document.querySelector(".btn-basura");
// Funcion para limpiar totalmente el lienzo canvas.
const borrarTodo = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  upImage(imgG, imgL);
};
basura.addEventListener("click", borrarTodo);


// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// Crear y cargar (CANVAS, IMAGEN)
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// Seleccion del Elemento DIV Lienzo
const lienzo = document.querySelector(".div-lienzo");

// Crear el elemento CANVAS, asignarle una clase y añadirlo al elemento leinzo
const canvas = document.createElement("CANVAS");
canvas.classList.add("canvasPaint");
lienzo.appendChild(canvas);

// Crear el contexto en 2D (CTX)
const ctx = canvas.getContext("2d");

// Dimension del CANVAS
const canvasX = screen.width;
const canvasY = screen.height;
canvas.width = 1520;
canvas.height = 900;

// Inicialización del tamaño del puntero.
ctx.lineWidth = 15;

// Tipo de linea a trazar
ctx.lineCap = "round";

/* Inicializa el movimiento en falso solo habilita al mantener presionado el click */
var trazo = false;

// Función DIBUJAR: Recibe un solo parametro como valor.
const dibujar = (e) => {
  let x, y;
  // Captura las cordenadas en X, Y.
  x = e.pageX - canvas.offsetLeft; // Alinea la precisión en X
  y = e.pageY - canvas.offsetTop; // Alinea la precisión en Y
  if (trazo == true) {
    //Crea una union entre la posición X , Y.
    ctx.lineTo(x, y);
    ctx.moveTo(x, y);
    ctx.stroke();
  }
};

// Habilitar el trazo para dibujar cuando se presione el click del mouse.
canvas.addEventListener("mousedown", () => (trazo = true));

// Deshabilitar el trazo para dibujar cuando se presione el click del mouse.
canvas.addEventListener("mouseup", () => {
  ctx.beginPath();
  trazo = false;
});
// Deshabilitar el trazo para dibujar cuando el mouse salga del lienzo.
canvas.addEventListener("mouseout", () => {
  ctx.beginPath();
  trazo = false;
});
// Comienza a dibujar una vez este el mouse en movimiento
canvas.addEventListener("mousemove", dibujar);


// -----------------------------------------------------------------------------
// Capturar el codigo de del grupo y lista de la imagen selecionada.
// -----------------------------------------------------------------------------
let imgG = localStorage.getItem("Grupo");
let imgL = localStorage.getItem("Lista");

// Cargar el lienzo y el dibujo
const upImage = (imgG, imgL) => {
  const picture = document.createElement("img");
  const fondo = document.createElement("img");

  fondo.src = "../IMG/GPAINT/fondoCanvas.jpg";
  picture.src = `../IMG/CVS/pgImg${imgG}/img${imgL}.jpg`;
  fondo.onload = () => ctx.drawImage(fondo, 0, 0);
  picture.onload = () => ctx.drawImage(picture, 505, 50);
};
upImage(imgG, imgL);