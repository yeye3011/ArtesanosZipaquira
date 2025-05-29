document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById('menuToggle');
  const menuDesplegable = document.getElementById('menuDesplegable');

  menuToggle.addEventListener('click', () => {
    menuDesplegable.style.display =
      menuDesplegable.style.display === 'block' ? 'none' : 'block';
  });

  window.addEventListener('click', (e) => {
    if (!menuDesplegable.contains(e.target) && e.target !== menuToggle) {
      menuDesplegable.style.display = 'none';
    }
  });
});

function mostrarFormulario() {
  // Mostrar el formulario
  document.getElementById("formularioFlotante").style.display = "block";

  // Cerrar el menú desplegable 
  const menu = document.getElementById("menuDesplegable");
  if (menu) {
    menu.style.display = "none";
  }
}
 

function cerrarFormulario() {
  document.getElementById("formularioFlotante").style.display = "none";
}



