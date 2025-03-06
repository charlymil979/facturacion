// Importar la función distribucion
import mostrarDistribucion from "./js/mostrarDistribucion.js";
import detalle from "./js/verContenidoMesa.js";
import contenedorBotones from "./js/contenedorBotones.js";
import { crearInputConLista } from "./js/buscarArt.js";
import quitarArticulo from "./js/quitarArticulo.js";
import actualizarMesaAbierta from "./js/actualizarMesa.js";
import mostrarMesa from "./js/mostrarMesa.js";
import { botonTicket } from "./js/botonMostrarTicket.js";
import { modalTicket } from "./js/modalTicket.js";
import mostrarMesasAbiertas from "./js/mostrarMesasAbiertas.js"
import modalLibroDiario from "./js/modalLibroDiario.js";
import { verMesasCobradas } from "./js/modalMesasCobradas.js";
import { actualizarMesaCobrada } from "./js/funcionesQueryPut.js";
import { agregarEgreso } from "./js/agregarEgreso.js";
import { guardarEgresos } from "./js/guardarEgresos.js";
import { actualizarEgresos } from "./js/actualizarEgresos.js";
import manejoResumenDiario from "./js/manejoResumenDiario.js";
import { contenedorBotonesDiario } from "./js/contenedorBotonesDiario.js";
import modalRegistros from "./js/modalRegistro.js";
import { anularFondo } from "./js/anularFondo.js";

// import { botonTicket, validarCobro } from "./js/cerrarCuenta.js";

// Crear la aplicación Vue
const app = Vue.createApp({
  data() {
    return {
      mensaje: "¡Hola desde Vue.js!",
    };
  },
  async mounted() {

    document.addEventListener("click", (e) => {
      if (e.target.className === "delete") {
        quitarArticulo(e);
        actualizarMesaAbierta();
        let mesa = document
          .querySelector("#mesaMostrada")
          .innerHTML.replace(" ", "-");
        mostrarMesa(mesa);
      }
		if(e.target.className ==="botonMesaCobrada"){
			actualizarMesaCobrada(Number(e.target.id.replace("b","")));
		}
		if (e.target.className === "remove") {
        quitarArticulo(e);
			guardarEgresos();
      actualizarEgresos();
      manejoResumenDiario();
		}
    });


    document.addEventListener("keyup",e => {

		if ((document.activeElement.id === "agregarEgreso") && e.key === "Enter") {
      agregarEgreso();
		guardarEgresos();
		actualizarEgresos();
		manejoResumenDiario()
    }
      if (
        document.querySelector(".ticket").style.display === "flex" &&
        e.key === "Escape"
      ) {
			document.querySelector(".anularFondo").style.display = "none";
        return (document.querySelector(".ticket").style.display = "none");
      }
     if (document.querySelector(".mesasAbiertas")&&(e.key === "Escape")) {
      document.querySelector(".mesasAbiertas").style.display = "none";
		document.querySelector(".anularFondo").style.display = "none";
    }
     if (document.querySelector(".mesasCobradas")&&(e.key === "Escape")) {
      document.querySelector(".mesasCobradas").style.display = "none";
		document.querySelector(".anularFondo").style.display = "none";
    }
     if (document.querySelector(".libroDiario")&&(e.key === "Escape")) {
      document.querySelector(".libroDiario").style.display = "none";
		document.querySelector(".anularFondo").style.display = "none";
    }
     if (document.querySelector(".registros")&&(e.key === "Escape")) {
      document.querySelector(".registros").style.display = "none";
		document.querySelector(".anularFondo").style.display = "none";
    }
 
    });


    const distrib = await mostrarDistribucion();
    const detalles = detalle();
    const botonesContainer = await contenedorBotones();
    const buscarArticulos = await crearInputConLista();
    const boton = botonTicket();
    const ticket = await modalTicket();
    const mesasAbiertas = await mostrarMesasAbiertas();
	 const libroDiario = modalLibroDiario()
	 const mesasCobradas = verMesasCobradas()
	 const botonesDiario = await contenedorBotonesDiario()
	 const registros = modalRegistros()
	 const nullFondo = anularFondo()
    
    document.getElementById("app").appendChild(distrib);
    document.getElementById("app").appendChild(botonesContainer);
    document.getElementById("app").appendChild(buscarArticulos);
    document.getElementById("app").appendChild(detalles);
    document.getElementById("app").appendChild(boton);
    document.getElementById("app").appendChild(botonesDiario);
    document.getElementById("app").appendChild(ticket);
    document.getElementById("app").appendChild(mesasAbiertas);
    document.getElementById("app").appendChild(libroDiario);
    document.getElementById("app").appendChild(mesasCobradas);
    document.getElementById("app").appendChild(registros);
    document.getElementById("app").appendChild(nullFondo);
  },
});

app.mount("#app");
