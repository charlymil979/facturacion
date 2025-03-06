import { totalDiario } from "./funcionesQueryGet.js"
import {revisarMesasCerradas} from "./funcionesLibroDiario.js" 

export default async function botonMesasCobradas() {
	
	const boton = document.createElement("button")
	boton.textContent = "Ves mesas cobradas"
	boton.addEventListener("click", async() => {
		const $verMesas = await revisarMesasCerradas()
		document.querySelector("#dinamicoMesasCerradas").innerHTML = $verMesas.innerHTML;
		document.querySelector(".anularFondo").style.display = "flex";
		document.querySelector(".mesasCobradas").style.display="flex"})
	return boton
}