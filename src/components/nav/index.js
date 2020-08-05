import React from 'react'

import navLogo from './img/logo_nav_new.png'

function Nav() {

  const onBurgerMenuClicked = () => {
    const burgerBtn = document.getElementById("links-mobile")
    burgerBtn.classList.toggle("links-mobile-revealed")
  }

  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src={navLogo} alt="logo" />
        </div>

        <div className="links">
          <a href="#about" className="nav-link">Qui sommes nous?</a>
          <a href="#mobile" className="nav-link">Télécharger l'app</a>
          <a href="#how-to" className="nav-link">Comment ca marche?</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <a href="#contacts" className="nav-link">Contact</a>
        </div>

        <i className="fa fa-bars menu-mobile" aria-hidden="true" onClick={onBurgerMenuClicked}></i>
      </div>

      <div className="links-mobile" id="links-mobile">
        <a href="#about" className="nav-link">Qui sommes nous?</a>
        <a href="#mobile" className="nav-link">Télécharger l'app</a>
        <a href="#how-to" className="nav-link">Comment ca marche?</a>
        <a href="#faq" className="nav-link">FAQ</a>
        <a href="#contacts" className="nav-link">Contact</a>
      </div>
    </nav>
  )
}

export default Nav
