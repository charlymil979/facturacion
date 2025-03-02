import datosMesaModif from "./cargarDatosModif.js";

const url = 'http://localhost:3000'
export async function actualizarMesaCobrada(orden) {
	try {
    const datos = datosMesaModif(orden);
	//  console.log(datos)
    if (!datos) {
      return console.log("No se cargaron datos para actualizar mesa");
    }
    const response = await fetch(`${url}/resumenVentas/${orden}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });
    if (!response.ok) {
      throw new Error(`Error al actualizar datos: ${response.status}`);
    }

    const resultado = await response.json();
   //  console.log(resultado);
  } catch (error) {window.alert("No se actualizaron valores de la mesa",error)}
}
