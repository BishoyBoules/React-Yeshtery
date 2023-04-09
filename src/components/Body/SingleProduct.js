import React from 'react'
import '../../styles/SingleProduct.css'
import product from '../../images/shirt.png'
import rotate from '../../images/360.png'
import adidas from '../../images/adidas.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const SingleProduct = (props) => {
  const saleElement = (
    <section className="saleElement">
      <span className="line"></span>
      <span className="oldPrice">{props.oldPrice} LE</span>
      <span className="sale">{props.salePercentage}%</span>
    </section>
  )
  const pickupFrom = (
    <section className="from">
      <div>
        Pickup From:<span>Genena Mall</span>
      </div>
    </section>
  )
  const pickupFromTo = (
    <section className="fromTo">
      <div>
        From:<span>UK</span>
      </div>
      <div>
        To:<span>Egypt</span>
      </div>
      <div>
        in:<span>{props.days}</span>
      </div>
    </section>
  )
  return (
    <div className="singleProduct">
      <section className="mainImage">
        <i>
          <img src={rotate} alt="product" />
        </i>
        <img src={product} alt="product" />
      </section>
      <section className="description">
        <div className="text">
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>
        <div className="details">
          <section className="price">
            <section className="priceFirst">
              <h1>9,999</h1>
              <span className="le">LE</span>
            </section>
            <>{props.sale && saleElement}</>
          </section>
          <section className="brandImg">
            <img src={adidas} alt="product" />
          </section>
        </div>
        <div className="rating">
          <section className="stars">
            <FontAwesomeIcon
              style={{ fontSize: '15px', color: 'orange', marginRight: '2px' }}
              icon={faStar}
            />
            <FontAwesomeIcon
              style={{ fontSize: '15px', color: 'orange', marginRight: '2px' }}
              icon={faStar}
            />
            <FontAwesomeIcon
              style={{ fontSize: '15px', color: 'orange', marginRight: '2px' }}
              icon={faStar}
            />
            <FontAwesomeIcon
              style={{ fontSize: '15px', color: 'orange', marginRight: '2px' }}
              icon={faStar}
            />
            <FontAwesomeIcon
              style={{
                fontSize: '15px',
                color: 'lightgrey',
                marginRight: '2px',
              }}
              icon={faStar}
            />
          </section>
          <section className="number">4.2 of 5</section>
        </div>
        <div className="pickup">
          <>{props.pickup ? pickupFrom : pickupFromTo}</>
        </div>
      </section>
    </div>
  )
}

export default SingleProduct
