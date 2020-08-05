import React from 'react';

const Education = () => {
	return (
		<section className="how-to" id="how-to">
			<h2 className="section-title">Comment ca marche?</h2>
			<br />
			<br />
			<br />
			
			<div className="steps">
				<hr />
				<div className="step">
					<div className="counter">1</div>
					<p>Téléchargez l'application</p>
				</div>

				<div className="step">
					<div className="counter">2</div>
					<p>Creez votre compte / Connectez vous</p>
				</div>

				<div className="step">
					<div className="counter">3</div>
					<p>Recherchez votre nounou sur l'app</p>
				</div>

				<div className="step">
					<div className="counter">4</div>
					<p>Reservez votre nounou (sous 2 jours)</p>
				</div>

				<div className="step">
					<div className="counter">5</div>
					<p>Rencontrez votre nounou à l'agence</p>
				</div>

				<div className="step">
					<div className="counter">6</div>
					<p>Repartez avec votre nounou</p>
				</div>
			</div>
		</section>
	);
}

export default Education;
