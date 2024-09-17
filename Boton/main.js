//Creacion de funcion de flecha
const saludar = () => {
  alert("Hola, bienvenido a este cuatrimestre");
};

//Creacion de alerta moderna con sweet alert 2
const SaludarNuevo = () => {
  Swal.fire({
    title: "¿Quieres guardar los cambios?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Guarda",
    denyButtonText: `No guarda`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("¡Salvado!", "", "éxito");
    } else if (result.isDenied) {
      Swal.fire("Los cambios no se guardan", "", "info");
    }
  });
};

const SaludarNuevo2 = () => {
  Swal.fire({
    title: "Custom width, padding, color, background.",
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(/images/trees.png)",
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `,
  });
};

//llamada de la funcion
