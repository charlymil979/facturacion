import cobrarMesa from "./cobrarMesa.js";
import { guardarHistorial } from "./funcionesQueryPost.js";

export function validarCobro() {
  const $botonCobrar = document.querySelector("#cobrar");
  const $montos = document.querySelectorAll(".parcial");
  const $propina = document.querySelector("#propina");
  
  const acumulado = Array.from($montos).reduce((acumulador, input) => {
    const valor = parseFloat(input.value) || 0; // Obtén el valor y conviértelo a número (o 0 si no es válido)
    return acumulador + valor;
  }, 0);
  $montos.forEach((input) => {
    input.placeholder =
    Number(document.querySelector("#pago").value) - acumulado;
  });
  const noPropina = isNaN(Number($propina.value)) ? 0 : Number($propina.value);
  if (
    acumulado - noPropina ===
    Number(document.querySelector("#pago").value) && acumulado !=0
  ) {
    $botonCobrar.disabled = false;
  } else {
    $botonCobrar.disabled = true;
  }
}
