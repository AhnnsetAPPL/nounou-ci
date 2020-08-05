import React from 'react';

import playStoreLogo from './../img/google-play-fr@2x.png';
import appStoreLogo from './../img/app-store-fr@2x.png';
import iPhoneLogo from './img/iphone_new.png';

const Header = () => {
	return (
		<div>
			<header>
				<section>
					<div className="slogant">
						<h1>Simplifiez-vous la vie !</h1>
						<h3>
							Trouvez la nounou idéale avec notre <br /> application.
						</h3>
						<div className="stores">
							<a href="#">
								<img src={playStoreLogo} alt="Google play store logo" />
							</a>
							<a href="#">
								<img src={appStoreLogo} alt="Apple store logo" />
							</a>
						</div>
					</div>
					<img src={iPhoneLogo} alt="Apple store logo" />
				</section>
			</header>
		</div>
	);
};

export default Header