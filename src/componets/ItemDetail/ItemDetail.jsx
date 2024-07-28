import React from 'react';
import "./ItemDetail.css";

function ItemDetail({item}) {
  return (
    <div className='item-detail'>
        <h2 className='item-title'>{item.title}</h2>
        <img classNamesrc={item.image} alt={item.description} />
    </div>
  )
}

export default ItemDetail