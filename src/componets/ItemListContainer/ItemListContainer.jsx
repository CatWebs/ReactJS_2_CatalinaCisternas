import { useEffect, useState } from 'react'
import ItemList from "./ItemList"
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom';



const ItemListContainer = ({ productos }) => {

//const [items, setItems] = useState(productos);
//useEffect(() => {
//  const producto = items.filter(idCategoria)
//}

//,[])
//const {idCategoria} = useParams()

const {idCategoria} = useParams()

const [items, setItems] = useState([]);
const filtro = productos.filter(el => el.categoria === idCategoria)

if(filtro !== undefined){
  useEffect(()=>{
    setItems(filtro);
  },[filtro])
}else{
  setItems(productos);
}





return (
        <>
            {
                ((productos.length) === 0) ?
                  <>
                  <div className="container-pelotas">
                    <div className="cargando">
                        <div className="pelotas"></div>
                        <div className="pelotas"></div>
                        <div className="pelotas"></div>
                        <span className="texto-cargando">Cargando...</span>
                      </div>
                    </div>
                  </>
                  :
                    <>
                      <div className='main-store-container'>
                        <h1>Hilados Arañitas</h1>    
                        <h2>Bienvenido a la comunidad de 'Arañitas Tejedoras'</h2>
                        <ItemList productos={items}  />
                      </div>
                    </>
            }
        </>
    );
};
export default ItemListContainer;


