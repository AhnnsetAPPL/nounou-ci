import React from 'react'

import playStoreLogo from './../img/google-play-fr@2x.png';
import appStoreLogo from './../img/app-store-fr@2x.png';
import s10Img from './img/s10_new.png';

const Mobile = () => {
  return (
    <section className="mobile" id="mobile">
      <div className="download-app">
        <img src={s10Img} alt="Apple store logo" />
        <div className="verbose">
          <h2>Téléchargez l'app!</h2>
          <p>Trouvez la nounou <strong>parfaite</strong>, de <strong>confiance</strong> rapidement et facilement avec notre application facile a utiliser et disponible sur
            <strong> Playstore </strong>
            et <strong>AppStore</strong>.</p>
          <div className="stores">
            <a href="#">
            <img src={appStoreLogo} alt="Apple store logo" />
            </a>
            <a href="#">
            <img src={playStoreLogo} alt="Google play store logo" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Mobile
