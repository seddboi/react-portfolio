import React from 'react';
import './contact-me.css';

import selfie from './selfie/portfolio.jpeg';
import github from './selfie/GitHub-Mark-64px.png';
import linkedin from './selfie/LI-In-Bug.png';
import resume from './selfie/wr-resumes-logo.png';

function Contact() {
	const clipboardCopy = () => {
		var copyText = document.getElementById('myInput');

		copyText.select();
		copyText.setSelectionRange(0, 99999);

		document.execCommand('copy');
		alert('Email Copied to Clipboard!');
	};

	return (
		<div class="contact-div" id="centered-title">
			<h1 id="contact-title">Contact Me</h1>
			<div class="callout" id="contact-section">
				<img id="selfie" alt="the sexy beast, Gian Zamora" src={selfie} />
				<div class="bottom-text">
					<input type="text" value="zmr.gian@gmail.com" id="myInput" />
					<button type="button" class="clipboard-button" onClick={clipboardCopy}>
						Copy Email
					</button>
					<div class="row-links">
						<a href="https://github.com/seddboi">
							<img class="links" src={github} alt="Github Link" />
						</a>
						<a href="https://www.linkedin.com/in/gian-zamora/">
							<img class="links" id="linkedin" src={linkedin} alt="LinkedIn Link" />
						</a>
						<a
							href="https://docs.google.com/document/d/1hdytmMskYmSvmlLCi7IIPyM2keAfKw_lDbU9Xa83mWs/edit?usp=sharing"
						>
							<img class="links" src={resume} alt="Resume Download" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
