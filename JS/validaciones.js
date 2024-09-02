export function validarCantidadCaracteres(input, min, max) {
  if (input.value.length >= min && input.value.length <= max) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    return false;
  }
}

// Función para validar que no haya solo espacios en blanco
export const validarNoSoloEspacios = (input) => {
  if (!input.value || input.value.trim() === "") {
    input.classList.add("is-invalid");
    Swal.fire({
      title: "Error",
      text: "El campo no puede estar vacío o contener solo espacios en blanco.",
      icon: "error",
    });
    return false;
  }
  input.classList.remove("is-invalid");
  return true;
};