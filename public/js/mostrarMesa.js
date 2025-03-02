import agregarArtManual from "./agregarArtManual.js";

export default function mostrarMesa(mesa) {

  const artics = JSON.parse(localStorage.getItem(mesa));
  const $nombreMesa = document.querySelector("#mesaMostrada");
  const $datosDinamicos = document.querySelector("#datosDinamicos");

  $nombreMesa.className = mesa.replace(/-\w+$/, "");
  $nombreMesa.innerHTML = mesa.replace("-", " ");

  // creo los tr para mostrar los articulos
  let $lineaPrecios = new String();
  let total = 0;
  if (artics) {
    artics.forEach((el) => {
      total += Number(el[1]);
      // console.log(el[0],el[1])
      $lineaPrecios += `<li class="leerTicket">
              <textarea class="art col1">${el[0]}</textarea> <textarea class="monto col2">${el[1]}</textarea>
              <span class="delete">x</span>
              <div class="ahora">${el[2]}</div>
              </li>
              `;
    });
  }

  $datosDinamicos.innerHTML = $lineaPrecios;
  const $suma = document.querySelector("#total");
  $suma.innerHTML = total;

  document.querySelector("#precioManual").addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      agregarArtManual();
    }
  });
}
