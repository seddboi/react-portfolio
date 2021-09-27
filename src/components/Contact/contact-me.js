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
                        <h4 id='body-text'>Email: zmr.gian@gmail.com</h4>
                        <h4 id='body-text'>Phone: 951-545-6589</h4>
                        <h4 id='body-text'><a id='links' href='https://www.linkedin.com/in/gian-zamora/'>Click here for my LinkedIn!</a></h4>
                        <h4 id='body-text'><a id='links' href='https://github.com/seddboi'>Click here for my Github!</a></h4>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;
