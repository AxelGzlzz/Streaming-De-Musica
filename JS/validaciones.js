export function validarCantidadCaracteres(input, min, max) {
  console.log(input)
if (input.value.trim().length >= min && input.value.trim().length <= max) {
  input.className = "form-control is-valid";
  return true;
} else {
  input.className = "form-control is-invalid";
  return false;
}

}
