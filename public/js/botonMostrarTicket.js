import { generarTicket } from "./generarTicket.js";
import { validarCobro } from "./validarCobro.js";

export function botonTicket() {
	const $botonTicket = document.createElement("button");
	$botonTicket.className = "botonTicket";
	$botonTicket.innerHTML = "Hacer<br>Ticket";
	$botonTicket.addEventListener("click", (e) => {
	let fecha=""
	const data = JSON.parse(localStorage.getItem("cajaInicial"));
    if(data){fecha=data.Fecha}
	console.log(fecha)
	if(fecha != ""){
    	if(document.querySelector("#mesaMostrada").innerHTML != "Mesa"){
			if(!document.querySelector(".art")){
				return window.alert("No hay articulos que cobrar")}
    		document.querySelector(".mesasAbiertas").style.display= "none"
			validarCobro()
    		generarTicket()
			document.querySelector(".anularFondo").style.display = "flex";
    		document.querySelector(".ticket").style.display= "flex"
		}else{
  			return window.alert("No hay mesa seleccionada")
  		}
	
		}else{
		return window.alert("Abrir caja, seleccione hora de apertura")}
	});
  return $botonTicket;
}
