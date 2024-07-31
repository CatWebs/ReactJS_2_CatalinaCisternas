import React from 'react'
import ovillos from '../../Productos'
import Item from './Item'
import { useState, useEffect } from "react";
import "./ItemList.css"

function ItemList() {

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
  
      useEffect(() => {
          const traerProductos = () => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(ovillos)
              },3000);
            });
          }
  
          traerProductos().then((resultados) => {
            setData(resultados);
            setLoading(false);
          })
      },[]);
  
      if(loading){
          return (
          <div className="container-pelotas">
            <div className="cargando">
              <div className="pelotas"></div>
              <div className="pelotas"></div>
              <div className="pelotas"></div>
              <span className="texto-cargando">Cargando...</span>
            </div>
          </div>)
      }

  return (
    <div className="main-store-container">
        <h1>Hilados Arañitas</h1>    
        <h2>Bienvenido a la comunidad de 'Arañitas Tejedoras'</h2>
        <div className="itemList-container">
        {data.map(prod => (
            <Item key={prod.id} {...prod}/>
          ))}
        </div>
    </div>
  )
}

export default ItemList