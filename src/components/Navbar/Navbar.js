import React from 'react'
import '../../styles/Navbar.css'
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
  faPhoneVolume,
  faCartShopping,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="lines">
        <div className="line"></div>
        <div className="midLine"></div>
        <div className="line"></div>
      </section>
      <section className="img">
        <img src={logo} alt="logo" />
      </section>
      <section className="links">
        <section className="first">
          <FontAwesomeIcon icon={faChevronLeft} />
          <p>Valentines's Day Offers! Buy Two Get One Free</p>
          <a href="/shop">Shop Now</a>
          <FontAwesomeIcon icon={faChevronRight} />
        </section>
        <section className="second">
          <section>
            <FontAwesomeIcon icon={faPhoneVolume} />
            <a href="/contact">Contact Us</a>
          </section>
          <section>
            <FontAwesomeIcon icon={faCartShopping} />
            <a href="/order">Track Order</a>
          </section>
          <section>
            <FontAwesomeIcon icon={faLocationDot} />
            <a href="/store">Find A Store</a>
          </section>
        </section>
      </section>
    </nav>
  )
}

export default Navbar
