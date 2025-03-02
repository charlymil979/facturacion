import { totalDiario } from "./funcionesQueryGet.js";
import manejoResumenDiario from "./manejoResumenDiario.js";

export function guardarCajaInicial() {
  let guardarInicio = "";

  const cajaInicial = {
    Fecha: "",
    Efectivo: "",
    EnCuenta: "",
  };

  guardarInicio = setTimeout(() => {
    const inicio = document.querySelectorAll(".inicioCaja");

    cajaInicial.Fecha = new Date(inicio[0].value).getTime() || "";
    cajaInicial.Efectivo = inicio[1].value.trim() || "";
    cajaInicial.EnCuenta = inicio[2].value.trim() || "";

    localStorage.setItem("cajaInicial", JSON.stringify(cajaInicial));
   //  console.log("Inicial guardado", new Date(inicio[0].value).getTime());
  }, 500);
}

export function calculoNumerales() {
  event.stopPropagation();
  const $output = document.querySelectorAll("output");
  $output.forEach((el) => {
    el.textContent =
      Number(el.parentNode.previousSibling.textContent) *
      Number(
        el.parentNode.previousSibling.previousSibling.textContent.replace(
          "$",
          ""
        )
      );
   //  console.log("calc");
  });
}

export async function cargarTotalesDiario() {
  if (document.querySelector("#agregarEgreso").value != "") {
    const totales = await totalDiario();
    const resultado = totales.reduce((acumulador, objeto) => {
      for (const key in objeto) {
        acumulador[key] = (acumulador[key] || 0) + objeto[key];
      }
      acumulador.total = (acumulador.total || 0) + 1;
      return acumulador;
    }, {});

    //  console.log(resultado, resultado.efectivo);
    setTimeout(() => {
      document.querySelector("#diarioMesas").value = resultado.total || 0;
      document.querySelector("#diarioEfvo").value = resultado.efectivo || 0;
      document.querySelector("#diarioTransf").value =
        resultado.transferencia + resultado.propinaTransf || 0;
      document.querySelector("#diarioDeb").value = resultado.debito || 0;
      document.querySelector("#diarioCred").value = resultado.credito || 0;
      document.querySelector("#diarioTotal").value = resultado.monto || 0;
      manejoResumenDiario();
    }, 50);
  }
}

export async function revisarMesasCerradas() {
  const $tbody = document.createElement("tbody");

  const mesas = await totalDiario();

  mesas.forEach((mesa, n) => {
    const $actualizar = document.createElement("button");
    $actualizar.textContent = `Modif. orden ${mesa.orden}`;
    $actualizar.id = `b${mesa.orden}`;
    const td = document.createElement("td");
    $actualizar.className = "botonMesaCobrada";
    td.appendChild($actualizar);
    const $fecha = new Date(mesa.fechaCobro);
	 const minutos =
     $fecha.getMinutes() < 10 ? `0${$fecha.getMinutes()}` : $fecha.getMinutes();

    const $tr = document.createElement("tr");
    $tr.innerHTML = `
	<td class="cobradaData">${$fecha.getHours()}:${minutos}</td>
	<td class="cobradaData">${mesa.mesa.replace("-", " ")}</td>
	<td contenteditable class="orden${mesa.orden} cobradaData">${mesa.efectivo}</td>
	<td contenteditable class="orden${mesa.orden} cobradaData">${
      mesa.transferencia
    }</td>
	<td contenteditable class="orden${mesa.orden} cobradaData">${mesa.debito}</td>
	<td contenteditable class="orden${mesa.orden} cobradaData">${mesa.credito}</td>
	<td contenteditable class="orden${mesa.orden} cobradaData prop">${
      mesa.propinaTransf
    }</td>
	<td style="font-weight:bold" class="total${mesa.orden} cobradaData">${
      mesa.monto
    }</td>
	<td class="cobradaData">${mesa.orden}</td>
`;
    $tr.insertAdjacentElement("beforeend", td);
    $tbody.appendChild($tr);
  });

  return $tbody;
}
