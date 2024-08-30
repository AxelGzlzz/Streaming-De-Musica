export function validarCantidadCaracteres(input, min, max) {
    if (input.value.length >= min && input.value.length <= max) {
      input.className = "form-control is-valid";
      return true;
    } else {
      input.className = "form-control is-invalid";
      false;
    }
  }
  
  