import React from 'react';
import './bio.css'
import ScrollAnimation from 'react-animate-on-scroll';

function Bio() {
    return (
        <ScrollAnimation animateIn='bio-drop'>
            <div class='grid-x align-center' id='top-layer'>
                <div class='callout large' id='about-me'>
                    <p><strong>Hi, </strong></p>
                    <p><strong>I am a recent University of California: Riverside Graduate with a degree in Applied Mathematics, 
                        and am looking to further explore my strengths as a learner and as an achiever. Despite having a background in Mathematics, 
                        I have spent countless hours building my strengths in developing my own web based applications! 
                        With my urge to provide quality applications and my drive to work a fast paced environment and meet deadlines, I am sure to
                        be a great fit in any position I am placed in!</strong> </p>
                    </div>
            </div>
        </ScrollAnimation>
    )
};
export default Bio;
