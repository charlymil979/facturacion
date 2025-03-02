

export default function reloj() {
  const meses = [["Ene"], ["Feb"],["Mar"],["Abr"],["May"],["Jun"],["Jul"],["Ago"],["Sep"],["Oct"],["Nov"],["Dic"]];
  const reloj = document.createElement("div")
  reloj.className= "reloj"
  let hoy = new Date()
  let minutos = null
  let mes = hoy.getMonth()
  hoy.getMinutes()<10 ? minutos =`0${hoy.getMinutes()}` : minutos = hoy.getMinutes()
  let fecha = `${hoy.getDate()}-${meses[mes]}-${hoy.getFullYear()}`
  let hora = `${hoy.getHours()} : ${minutos}`;
  reloj.innerHTML = `${fecha}<br>${hora}`;
  
  setInterval(() => {
    hoy = new Date()
    
    hoy.getMinutes()<10 ? minutos =`0${hoy.getMinutes()}` : minutos = hoy.getMinutes()
    fecha = `${hoy.getDate()}-${meses[mes]}-${hoy.getFullYear()}`
    hora = `${hoy.getHours()} : ${minutos}`;
    reloj.innerHTML = `${fecha}<br>${hora}`;
  }, 60000);
  return reloj
}

