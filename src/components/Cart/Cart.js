import React from 'react'
import '../../styles/Cart.css'
import CartItem from './CartItem'

const Cart = (props) => {
  const cartItem = (
    <CartItem
      description={props.description}
      quantity={props.quantity}
      itemPrice={props.price}
    />
  )
  return (
    <div className="cart">
      <span className="close" onClick={props.close}>
        X
      </span>
      <h1>My Cart</h1>
      <h5>Cart Summary</h5>
      {!props.quantity ? <div>Quantity: 0</div> :cartItem}
      <h2>Total: {props.total} LE</h2>
      <section className="buttons">
        <button>Review Cart</button>
        <button>Complete Checkout</button>
      </section>
    </div>
  )
}

export default Cart
