import React from 'react'
import ItemList from "./ItemList"
import "./ItemListContainer.css"

const ItemListContainer = ({ productos }) => {
 
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
                        <ItemList productos={productos}  />
                      </div>
                    </>
            }
        </>
    );
};
export default ItemListContainer;


