import React from 'react'
import itemImg from '../../images/second.png'
import '../../styles/CartItem.css'

const CartItem = (props) => {
  return (
    <div className="cartItem">
      <section className="item">
        <section className="itemImg">
          <img src={itemImg} alt="item" />
        </section>
        <section className="itemDetails">
          <p className="description">{props.description}</p>
          <p className="quantity">Quantity: {props.quantity}</p>
          <div>
            <section className="itemPrice">
              <h1>{props.itemPrice}</h1>
              <span>LE</span>
            </section>
            <section>
              <button>Remove</button>
            </section>
          </div>
        </section>
      </section>
    </div>
  )
}

export default CartItem
