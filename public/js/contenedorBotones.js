import reloj from "./reloj.js"
import botonMesasAbiertas from "./botonMesasAbiertas.js"


export default async function contenedorBotones(){

const container = document.createElement("div")
container.className="containerBotones"
const verReloj = reloj()
const verBotonMesas = botonMesasAbiertas()
container.appendChild(verReloj)
container.appendChild(verBotonMesas)
return container
}