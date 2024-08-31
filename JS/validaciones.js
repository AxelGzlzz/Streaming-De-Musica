export function validarCantidadCaracteres(input, min, max) {
  if (input.value.length >= min && input.value.length <= max) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    false;
  }
}

export function validarNumeros(input, min, max) {
  const valor = parseInt(input.value);

  if (isNaN(valor)) {
    input.classList.add("is-invalid");
    Swal.fire({
      title: "Error",
      text: "Por favor, ingresa un número válido.",
      icon: "error",
    });
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

  export const validarURL = (input) => {
    try {
      new URL(input.value);
      input.classList.remove("is-invalid");
      return true;
    } catch (_) {
      input.classList.add("is-invalid");
      Swal.fire({
        title: "Error",
        text: "Por favor, ingresa una URL válida.",
        icon: "error",
      });
      return false;
    }
  };