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

// Mariposas azules aleatorias

const contenedorMariposas = document.querySelector(".contenedor-mariposas");

function crearMariposa() {
  const mariposa = document.createElement("div");
  mariposa.classList.add("mariposa");

  const posicionX = Math.random() * window.innerWidth;
  const posicionY = Math.random() * window.innerHeight;

  const movimientoX = (Math.random() * 400 - 200) + "px";
  const movimientoY = (Math.random() * -350 - 120) + "px";

  const tamaño = Math.random() * 30 + 25;
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

setInterval(crearMariposa, 1200);