import { useEffect,useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
    const [itemInfo,setItemInfo]=useState(null);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/2")
            .then(response=>{
                if(!response.ok){
                    throw new Error("Ha ocurrido un error con la API")
                }
                return response.json();
            })
            .then(data=>setItemInfo(data))
            .catch(error=>console.error("Error al traer la base de datos:",error));
    },[])
  return (
    <>
    <h2>Detalle del Producto</h2>
    {itemDetail && <ItemDetail item={itemInfo}/>}
    </>
  )
}

export default ItemDetailContainer