
// Función para cargar el archivo JSON
export default async function datosDb() {
  try {
    const response = await fetch("../json/db.json")
    const data = await response.json()
    return data
  } catch (error) {
    console.log("error: ",error)
  }

  }
  
