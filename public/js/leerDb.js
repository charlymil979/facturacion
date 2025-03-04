
// Función para cargar el archivo JSON
export async function dbMesas() {
  try {
    const data = await fetch("http://localhost:3000/mesas")
    const mesas = await data.json()
    return mesas
  } catch (error) {
    console.log("error: ",error)
  }
}
  
export async function dbPrecios() {
  try {
    const data = await fetch("http://localhost:3000/datos")
    const precios = await data.json()
    return precios
  } catch (error) {
    console.log("error: ",error)
  }
}
