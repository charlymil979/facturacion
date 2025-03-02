import botonLibroDiario from "./BotonLibroDiario.js";
import botonMesasCobradas from "./botonMesasCobradas.js";
import botonRegistro from "./botonRegistro.js";

export async function contenedorBotonesDiario() {
  const contenedor = document.createElement("div");
  contenedor.className = "botonesDiario";
const verBotonLibroDiario = botonLibroDiario()
const registros = botonRegistro()
const verBotonMesasCobradas = await botonMesasCobradas()
  contenedor.appendChild(verBotonLibroDiario);
  contenedor.appendChild(verBotonMesasCobradas);
  contenedor.appendChild(registros);
  return contenedor;
}
