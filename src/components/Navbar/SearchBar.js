import React from 'react'
import '../../styles/SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faBasketShopping,
  faHeart,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import adidas from '../../images/adidas.png'

const SearchBar = (props) => {
  return (
    <nav className="searchBar">
      <section className="search">
        <i>
          <FontAwesomeIcon icon={faSearch} />
        </i>
        <input type="text" placeholder="Search" />
      </section>
      <section className="img">
        <img src={adidas} alt="adidas logo" />
      </section>
      <section className="links">
        <section onClick={props.openCart}>
          <FontAwesomeIcon icon={faBasketShopping} />
          <span>{props.number}</span>
          <a onClick={props.openCart} href="#">
            Cart
          </a>
        </section>
        <section>
          <FontAwesomeIcon icon={faHeart} />
          <a href="/wishlist">Wishlist</a>
        </section>
        <section>
          <FontAwesomeIcon icon={faUser} />
          <a href="/login">Login</a>
        </section>
      </section>
    </nav>
  )
}

export default SearchBar
