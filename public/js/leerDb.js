
// Función para cargar el archivo JSON
export default async function datosDb() {
  try {
    const response = await fetch("http://localhost:3000/json/db.json")
    const data = await response.json()
    return data
  } catch (error) {
    console.log("error: ",error)
  }

  }
  
