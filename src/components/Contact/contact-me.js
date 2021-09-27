import React from 'react';
import './contact-me.css';

import selfie from './selfie/IMG_1892_2.jpg'

function Contact() {
    return (
        <div>
            <div id='centered-title'>
                <h1 id='contact-title'>Contact Me</h1>
                <div class='callout row' id='contact-section'>
                    <img id='selfie' src={selfie} />
                    <div>
                        <h6 id='body-text'>Email: zmr.gian@gmail.com</h6>
                        <h6 id='body-text'>Phone: 951-545-6589</h6>
                        <h6 id='body-text'>LinkedIn: https://www.linkedin.com/in/gian-zamora/ </h6>
                        <h6 id='body-text'>Github: https://github.com/seddboi</h6>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;
