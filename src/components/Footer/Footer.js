import React from 'react'
import '../../styles/Footer.css'
import logo from '../../images/logo-yellow.png'
import facebook from '../../images/facebook@2x.png'
import instagram from '../../images/instagram@2x.png'
import linkedin from '../../images/linkedin@2x.png'
import twitter from '../../images/twitter-logo.png'
import send from '../../images/send.png'
import visa from '../../images/visa.png'
import mastercard from '../../images/matercard.png'
import cash from '../../images/cash.png'
import nasnav from '../../images/nas_nav.png'

const Footer = () => {
  return (
    <div className="footer">
      <section className="details">
        <section className="textSection">
          <div className="img">
            <img src={logo} alt="logo" />
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus.
            </p>
            <p>
              nascetur ridiculus mus. Donec quam felis, ultricies nec,
              pellentesque eu, pretium quis, sem. Nulla consequat massa quis
              enim. Donec pede justo, fringilla velleo ligula, porttitor eu,
              consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
              in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
              metus varius laoreet. Quisque rutrum.
            </p>
            <p>
              Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
              ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            </p>
          </div>
        </section>
        <section className="firstVertical"></section>
        <section className="subscribeSection">
          <section className="subscribe">
            <h3>Subscribe to our newsletter</h3>
            <form className="subscribeInput">
              <input type="text" placeholder="Enter Your Mail" />
              <button>
                Subscribe
                <img src={send} alt="send" />
              </button>
            </form>
          </section>
          <section className="links">
            <section className="leftLinks">
              <a href="#about">About US</a>
              <a href="#contact">Contact Us</a>
              <a href="#track">Track Order</a>
              <a href="#terms">Terms & Conditions</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#sell">Sell With Us</a>
              <a href="#shipping">Shipping & Returns</a>
            </section>
            <section className="secondVertical"></section>
            <section className="rightLinks">
              <div>
                <img className="linkImg" src={facebook} alt="facebook" />
                /YESHTERY
              </div>
              <div>
                <img className="linkImg" src={linkedin} alt="linkedin" />
                /YESHTERY
              </div>
              <div>
                <img className="linkImg" src={instagram} alt="instagram" />
                /YESHTERY
              </div>
              <div>
                <img className="linkImg" src={twitter} alt="twitter" />
                /YESHTERY
              </div>
            </section>
          </section>
        </section>
      </section>
      <hr />
      <section className="rightsSection">
        <section>© 2023 yeshtery, all rights reserved.</section>
        <section className='paying'>
          <img src={cash} alt="cash" />
          <img src={visa} alt="visa" />
          <img src={mastercard} alt="mastercard" />
        </section>
        <section className='nasnav'>
          Powered By <img src={nasnav} alt="nasnav" />
        </section>
      </section>
    </div>
  )
}

export default Footer
