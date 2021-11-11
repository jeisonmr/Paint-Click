// Creacion de CATEROGIRA de DIBUJOS. (PAINT_GROUP)
const imgGroup = document.getElementById("group_paint");
const background = document.querySelector('.section-container');
let imgGroupFragment = document.createDocumentFragment();



  for (let i = 1; i <= 12; i++) {
    let div = document.createElement("DIV");
    let a = document.createElement("A");
    let btn = document.createElement("BUTTON");
    let img = document.createElement("IMG");
    let backImg = document.createElement("IMG");
    let inter = false;
    // Creando las clases y valores para los DIV.
    div.classList.add(`div-dibujos`, `d${i}`);
    btn.setAttribute("value", i);
    // Creando los enlaces para las ventanas.
    a.setAttribute('href','../HTML/list_paint.html');
    // Creando las clases de los botones de acceso.
    btn.classList.add(`btnD${i}`, `btn-dibujos`);
    // Crear img.
    img.classList.add(`img${i}`, `img`);
    img.setAttribute(`src`, `../IMG/GPAINT/${i}.jpg`);

    backImg.setAttribute(`src`,`../IMG/GPAINTBG/${i}.png`);
    backImg.classList.add(`backImg`);
    // Creacion de los botones.
    btn.appendChild(img);
    a.appendChild(btn);
    // a.appendChild(texto);
    div.appendChild(a);
    btn.addEventListener("click", () => {
      localStorage.setItem("Grupo", btn.value);
    });
    btn.addEventListener("mouseenter", () =>{
        background.appendChild(backImg);
        inter = true;
      });
    btn.addEventListener("mouseout", () =>{
      if(inter == true){
        background.removeChild(backImg);
    }
  });

    imgGroup.appendChild(div);
  }
    imgGroup.appendChild(imgGroupFragment);
