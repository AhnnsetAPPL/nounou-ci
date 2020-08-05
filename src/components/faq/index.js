import React from 'react';

import faqImg from './img/faq_new.png'

function Faq() {
	return (
		<section className="faq" id="faq">
			<h2 className="section-title">Questions Fréquentes</h2>

			<div className="faq-wrapper">
				<img src={faqImg} alt="faq" />

				<div className="maccordion">
					<div className="moption">
						<input type="checkbox" id="toggle1" className="mtoggle" />
						<label className="mtitle" for="toggle1">
							COMMENT REGLER SON PAIEMENT ?
						</label>
						<div className="mcontent">
							<p>Le reglement se fait a l'agence.</p>
						</div>
					</div>

					<div className="moption">
						<input type="checkbox" id="toggle2" className="mtoggle" />
						<label className="mtitle" for="toggle2">
							COMMENT SOUSCRIRE A L'ASSURANCE ?
						</label>
						<div className="mcontent">
							<p>Le montant réglé pour la nounou prend en compte la prime d'assurance.</p>
						</div>
					</div>

					<div className="moption">
						<input type="checkbox" id="toggle3" className="mtoggle" />
						<label className="mtitle" for="toggle3">
							QUE COUVRE LA PRIME D'ASSURANCE ?
						</label>
						<div className="mcontent">
							<p>La prime d'assurance couvre les vols.</p>
						</div>
					</div>

					<div className="moption">
						<input type="checkbox" id="toggle4" className="mtoggle" />
						<label className="mtitle" for="toggle4">
							QUE FAIRE QUAND UNE NOUNOU ABANDINNE SON POST ?
						</label>
						<div className="mcontent">
							<p>
								Lorsqu'une nounou abandonne son post, signaler-le a l'agence; une nouvelle nounou vous
								sera affectée.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Faq;
