import React from 'react';

import About from './../about';
import Mobile from './../mobile-app';
import Education from './../education';
import Faq from './../faq';
import Contact from './../contact';

const MainContent = () => {
	return (
		<div className="main-content">
			<About />
			<Mobile />
      <Education />
			<Faq />
      <Contact />
		</div>
	);
};

export default MainContent;
