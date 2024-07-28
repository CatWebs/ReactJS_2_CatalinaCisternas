import "./ItemListContainer.css"
import { productos } from "../../Productos.js"
import { useState, useEffect } from "react";

function ItemListContainer() {

  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(true);

    useEffect(() => {
        const traerProductos = () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(productos)
            },5000);
          });
        }

        traerProductos().then((resultados) => {
          setData(resultados);
          setLoading(false);
        })
    },[]);

    if(loading){
        return <div>Cargando...</div>
    }

    console.log(data);

  return (
    <>
        <h1>Hilados Arañitas</h1>    
        <h2>Bienvenido a la comunidad de 'Arañitas Tejedoras'</h2>
        <div className="container">
        {data.map((prod) => (
            <div className="card" key={prod.id}>
                <img src={prod.imagen}/>
                <h3>{prod.nombre}</h3>
                <p>{prod.descripcion}</p>
                <h4>{prod.precio}</h4>
            </div>
          ))}
        </div>
    </>
  )
}


export default ItemListContainer
