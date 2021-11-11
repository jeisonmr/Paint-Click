const divContainer = document.querySelector(".div-main_home");

const divPaint = document.createElement("div");
const aPaint = document.createElement("a");
const btnPaint = document.createElement("button");
const txtPaint = document.createElement("p");

divPaint.classList.add(`div-pintar`, `divSec`);
aPaint.setAttribute("href", "../HTML/group_paint.html");
btnPaint.classList.add(`btn-pintar`, `btn`);
txtPaint.classList.add("txt");

divPaint.appendChild(aPaint);
aPaint.appendChild(btnPaint);
aPaint.appendChild(txtPaint);

const divRead = document.createElement("div");
const aRead = document.createElement("a");
const btnRead = document.createElement("button");
const txtRead = document.createElement("p");

divRead.classList.add("div-lectura", "divSec");
aRead.setAttribute("href", "../HTML/list_read.html");
btnRead.classList.add(`btn-lectura`, `btn`);
txtRead.classList.add("txt");

divRead.appendChild(aRead);
aRead.appendChild(btnRead);
aRead.appendChild(txtRead);

divContainer.appendChild(divPaint);
divContainer.appendChild(divRead);