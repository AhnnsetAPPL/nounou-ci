import React from 'react';

import contactImg from './img/contacts.jpg'

const Contact = () => {
	return (
		<section className="contacts" id="contacts">
			<div className="wrapper">
				<div className="info">
					<h2>Contacts</h2>
					<p>
						<strong>Telephones:</strong>
						<br />
						+225 22 33 44 55<br />
						+225 00 88 77 11
					</p>

					<p>
						<strong>E-mail:</strong>
						<br />
						contact@nounou.ci
					</p>

					<p>
						<strong>Adresse:</strong>
						<br />
						Carrefour Bonoumin, Cocody, Abidjan
					</p>
				</div>

				<img src={contactImg} alt="Contacts Image" />
			</div>
		</section>
	);
}

export default Contact;
