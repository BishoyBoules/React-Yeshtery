import React from 'react'
import '../../styles/Product.css'
import first from '../../images/first.png'
import second from '../../images/second.png'
import rotate from '../../images/360.png'
import adidas from '../../images/adidas.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  return (
    <>
      <section className="category">
        <a href="/men">Men</a>/<a href="clothing">Clothing</a>/
        <a href="tops">Tops</a>/<a href="adidas">Adidas</a>/
        <a href="t-shirt">Adidas Black T-Shirt</a>
      </section>
      <hr />
      <section className="product">
        <section className="images">
          <section className="mainImage">
            <i>
              <img src={rotate} alt="product" />
            </i>
            <img src={props.photo} alt="product" />
          </section>
          <section className="moreImages">
            <FontAwesomeIcon
              style={{ fontSize: '40px', overflow: 'hidden' }}
              icon={faChevronLeft}
            />
            <img src={first} alt="product" />
            <img src={second} alt="product" />
            <img src={first} alt="product" />
            <FontAwesomeIcon
              style={{ fontSize: '40px', overflow: 'hidden' }}
              icon={faChevronRight}
            />
          </section>
        </section>
        <section className="details">
          <section className="price">
            <img src={adidas} alt="adidas" />
            <p className="description">{props.description}</p>
            <h3>Men</h3>
            <FontAwesomeIcon
              style={{ fontSize: '30px', color: 'orange', marginRight: '2px' }}
              icon={faStar}
            />
            <FontAwesomeIcon
              style={{ fontSize: '30px', color: 'orange', marginRight: '2px' }}
              icon={faStar}
            />
            <FontAwesomeIcon
              style={{ fontSize: '30px', color: 'orange', marginRight: '2px' }}
              icon={faStar}
            />
            <FontAwesomeIcon
              style={{ fontSize: '30px', color: 'orange', marginRight: '2px' }}
              icon={faStar}
            />
            <FontAwesomeIcon
              style={{
                fontSize: '30px',
                color: 'lightgrey',
                marginRight: '2px',
              }}
              icon={faStar}
            />
            <span className="rating">4.9 of 5</span>
            <span className="numberOfRates">22 Rates</span>
            <div>
              <h1>{props.price}</h1>
              <span className="le">LE</span>
              <span className="line"></span>
              <span className="oldPrice">19,999</span>
              <span className="sale">30% Off</span>
            </div>
          </section>
          <hr />
          <section className="size">
            <h1>Size</h1>
            <div className="sizeCategories">
              <span>Small</span>
              <span>Medium</span>
              <span className="activeSize">Large</span>
              <span>X Large</span>
              <span>XX Large</span>
            </div>
          </section>
          <hr />
          <section className="color">
            <h1>color</h1>
            <div className="colorCategories">
              <span>
                <img src={first} alt="red" />
              </span>
              <span className="activeColor">
                <img src={second} alt="black" />
              </span>
            </div>
          </section>
          <hr />
          <section className="quantity">
            <h1>Quantity</h1>
            <div className="number">
              <button
                disabled={props.quantity === 1 ? true : false}
                onClick={props.decrease}
              >
                -
              </button>
              {props.quantity}
              <button onClick={props.increase}>+</button>
            </div>
            <div className="cartButtons">
              <button onClick={props.add} className="add">Add To Cart</button>
              <button className="pickup">Pickup From Store</button>
            </div>
          </section>
        </section>
      </section>
    </>
  )
}

export default Product
