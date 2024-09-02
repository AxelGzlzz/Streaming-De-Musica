export function validarCantidadCaracteres(input, min, max) {
  if (input.value.length >= min && input.value.length <= max) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
  
}
  
export const validarNoSoloEspacios = (input) => {
    if (input.value.trim() === "") {
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

  