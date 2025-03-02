
export default function leerMesaAbierta(){

  const datos=[]
  const art = document.querySelectorAll(".col1")
  const precio = document.querySelectorAll(".col2")
  const hora = document.querySelectorAll(".ahora");
  
  hora.forEach((el,n )=> {
    if(el.innerText!=""){datos.push([art[n].value, precio[n].value,el.innerText]);
    }
  });
  return datos
}