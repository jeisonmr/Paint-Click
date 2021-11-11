const divContainer = document.querySelector(".div-main");
const divContainerFragment = document.createDocumentFragment();

for (let i = 1; i <= 4; i++) {
  const divReadList = document.createElement("div");
  const aReadList = document.createElement("a");
  const btnReadList = document.createElement("button");
  const imgReadList = document.createElement("img");

  divReadList.classList.add(`div-cuentos`, `c${i}`);
  aReadList.setAttribute("href", "../HTML/read.html");
  btnReadList.classList.add(`btn-c${i}`, `btn`);
  btnReadList.setAttribute(`value`, i);
  imgReadList.classList.add(`img`);
  imgReadList.setAttribute(`src`, `../IMG/JPG/listRead/c${i}.jpg`);

  btnReadList.addEventListener("click", () => {
    const libro = btnReadList.value;
    localStorage.setItem("banner", libro);
    console.log(libro);
    fetch(`../JSON/PK202100${libro}.json`)
      .then((title) => title.json())
      .then((title) => localStorage.setItem("titleRead", title.title));

    fetch(`../JSON/PK202100${libro}.json`)
      .then((histRead) => histRead.json())
      .then((histRead) => localStorage.setItem("histRead", histRead.history));
  });

  divReadList.appendChild(aReadList);
  aReadList.appendChild(btnReadList);
  btnReadList.appendChild(imgReadList);
  divContainerFragment.appendChild(divReadList);
}

divContainer.appendChild(divContainerFragment);
