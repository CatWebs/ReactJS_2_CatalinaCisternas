import React from 'react'


function Item({nombre,precio,imagen,descripcion,id}) {
  return (
        <div className="item-card" key={id}>
            <div className='container-img'><img className="item-card-img" src={imagen} alt={descripcion}/></div>
            <div className="item-card-body">
                <h3 className="item-card-title">{nombre}</h3>
                <h4>{precio}</h4>
                <button className="item-button">Ver más</button>
            </div>
        </div>
    )
}

export default Item

