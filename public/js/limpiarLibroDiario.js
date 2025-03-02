
export function limpiarLibroDiario() {
	document.querySelectorAll(".ini").forEach(el =>{
		el.value = ""
	});
	localStorage.setItem("cajaInicial","{}");
	const inicio = document.querySelectorAll(".inicioCaja")
	inicio.forEach(el => el.value="")
	const totales = document.querySelectorAll(".itemIngreso");
	totales.forEach(el => el.value="")
	localStorage.setItem("egresosDiario", "[]");
	const tabla = document.querySelector(".tablaResumen")
	const td = tabla.querySelectorAll("td")
	const nombres = [0,5,10,15,20]
	td.forEach((el,n)=>{
		if(!nombres.includes(n)){
			el.innerText = ""
		}
	})
}