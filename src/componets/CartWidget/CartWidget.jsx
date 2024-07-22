import carrito from "../../assets/shopping-cart_3394009.png"
import "./CartWidget.css"

function CartWidget() {
  return (
    <div className="carrito">
        <img src={carrito} className="img-carrito"/>
        <span className="carrito-cantidad">0</span>
    </div>
  )
}

export default CartWidget