/* Popup de imágenes del carrusel */

const imagenesCarrusel = document.querySelectorAll(".tarjeta-dibujo img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const cerrarPopup = document.getElementById("cerrarPopup");

imagenesCarrusel.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    popup.classList.add("activo");
    popupImg.src = imagen.src;
  });
});

cerrarPopup.addEventListener("click", () => {
  popup.classList.remove("activo");
  popupImg.src = "";
});

popup.addEventListener("click", (evento) => {
  if (evento.target === popup) {
    popup.classList.remove("activo");
    popupImg.src = "";
  }
});

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape") {
    popup.classList.remove("activo");
    popupImg.src = "";
  }
});


/* Mariposas azules aleatorias con easter egg */

const contenedorMariposas = document.querySelector(".contenedor-mariposas");

function crearMariposa() {
  if (!contenedorMariposas) return;

  const mariposa = document.createElement("div");
  mariposa.classList.add("mariposa");

  /*
    Probabilidad del easter egg:
    0.01 = 1%
    0.02 = 2%
    0.05 = 5%
    0.10 = 10%
    1 = 100% para probar
  */
  const probabilidadEasterEgg = 0.02;

  const esEasterEgg = Math.random() < probabilidadEasterEgg;

  if (esEasterEgg) {
    mariposa.classList.add("mariposa-easteregg");
  }

  const posicionX = Math.random() * window.innerWidth;
  const posicionY = Math.random() * window.innerHeight;

  const movimientoX = Math.random() * 400 - 200 + "px";
  const movimientoY = Math.random() * -350 - 120 + "px";

  const tamaño = esEasterEgg
    ? Math.random() * 45 + 45
    : Math.random() * 30 + 25;

  const duracion = Math.random() * 5 + 7;

  mariposa.style.left = posicionX + "px";
  mariposa.style.top = posicionY + "px";
  mariposa.style.width = tamaño + "px";
  mariposa.style.height = tamaño + "px";
  mariposa.style.animationDuration = duracion + "s";

  mariposa.style.setProperty("--movimiento-x", movimientoX);
  mariposa.style.setProperty("--movimiento-y", movimientoY);

  contenedorMariposas.appendChild(mariposa);

  setTimeout(() => {
    mariposa.remove();
  }, duracion * 1000);
}

/* Crea una mariposa cada 1.2 segundos */
setInterval(crearMariposa, 1200);

/* Crea algunas mariposas al iniciar la página */
crearMariposa();
crearMariposa();
crearMariposa();
