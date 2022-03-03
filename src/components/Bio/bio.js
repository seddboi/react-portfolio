import React from 'react';
import './bio.css'
import ScrollAnimation from 'react-animate-on-scroll';

function Bio() {
    return (
        <ScrollAnimation animateIn='fade-in'>
            <div class='grid-x align-center' id='top-layer'>
                <div class='callout large' id='about-me'>
                    <p><strong>Hi, I'm Gian Zamora. </strong></p>
                    <p><strong>I'm a Full Stack Developer focusing primarily on contemporary design in web-based applications. Recently earned a certificate 
                        in full stack web development from UC Riverside Extension, attaining skills like Javascript, Node.js, MySQL and React.js. Known to be a pragmatic 
                        and inventive designer, focusing primarily on responsive React designs. As a great team player and an intuitive problem-solver, I am excited to provide quality applications 
                        while working a fast paced environment to meet deadlines.</strong> </p>
                    </div>
            </div>
        </ScrollAnimation>
    )
};
export default Bio;
