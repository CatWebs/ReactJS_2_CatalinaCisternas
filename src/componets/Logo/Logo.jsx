import React from 'react'
import logo from "../../assets/Arañitas2.png"
import './Logo.css'

function Logo() {
  return (
    <div className='container-logo'>
        <div className='logo'>
            <img src={logo} alt="Logotipo de la tienda" />
        </div>
    </div>
  )
}

export default Logo