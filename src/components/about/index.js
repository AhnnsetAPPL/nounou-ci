import React from 'react';

import shieldImg from './img/shield.svg';
import starsImg from './img/stars.svg';
import satisfactionImg from './img/satisfaction.svg';

const About = () => {
	return (
		<section className="about" id="about">
			<h2 className="section-title">Qui sommes nous?</h2>
			<p>
				Nous sommes l' agence numero 1 de mise en relation de nounous et de familles, <br />
				permettant de repondre a vos besoins de <strong>cuisine</strong>, <strong>lessive</strong>,{' '}
				<strong>vaisselle</strong>, <strong>garde-enfant</strong> etc ...
			</p>

			<article className="strength">
				<div className=" card">
					<div className="content">
						<div className="header">
							<img src={shieldImg} alt="Shield Logo" />
						</div>
						<div className="description">
							<p>Sécurité et Assurance</p>
							<small>Un service assuré pour plus de sécurité.</small>
						</div>
					</div>
				</div>

				<div className=" card">
					<div className="content">
						<div className="header">
							<img src={satisfactionImg} alt="Satifaction Logo" />
						</div>
						<div className="description">
							<p>Satisfaction Client</p>
							<small>Des centaines de nounous prêtes à simplifier votre vie.</small>
						</div>
					</div>
				</div>

				<div className=" card">
					<div className="content">
						<div className="header">
							<img src={starsImg} alt="Stars Logo" />
						</div>
						<div className="description">
							<p>Service de qualité</p>
							<small>Des nounous recommandées pour un service de qualité.</small>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
};

export default About;