import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/Navbar/SearchBar'
import LinksBar from './components/Navbar/LinksBar'
import Product from './components/Body/Product'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart'
import product from './images/shirt.png'
const SimilarProducts = React.lazy(() =>
  import('./components/Body/SimilarProducts'),
)

function App() {
  const [showCart, setShowCart] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [orderedQuantity, setOrderedQuantity] = useState(0)
  const bodyClickHandler = () => {
    if (showCart) {
      setShowCart(false)
    }
  }
  const addHandler = () => {
    setOrderedQuantity(orderedQuantity + quantity)
    setQuantity(1)
  }
  const description =
    'Adidas black t-shirt Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
  const itemPrice = 9999

  return (
    <div className="App">
      <section
        className={showCart ? 'hide' : 'show'}
        onClick={bodyClickHandler}
      >
        <Navbar />
        <SearchBar
          number={orderedQuantity}
          openCart={() => setShowCart(true)}
        />
        <LinksBar />
        <Product
          description={description}
          price={9999}
          quantity={quantity}
          photo={product}
          increase={() => setQuantity(quantity + 1)}
          decrease={() => setQuantity(quantity - 1)}
          add={addHandler}
        />
        <SimilarProducts />
        <Footer />
      </section>
      {showCart && (
        <Cart
          close={() => setShowCart(false)}
          description={description}
          quantity={orderedQuantity}
          price={itemPrice}
          total={itemPrice * orderedQuantity}
        />
      )}
    </div>
  )
}

export default App
