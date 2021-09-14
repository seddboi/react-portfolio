import React from 'react';
import './mainheader.css';
import ScrollAnimation from 'react-animate-on-scroll';

function MainHeader() {
    return (
        <div class='diagonal'>
            <div>
                <ScrollAnimation animateIn='name-animation'>
                    <h1><strong class='name'>
                        Gian Zamora
                    </strong></h1>
                </ScrollAnimation>
                <h4 class='content'>Full Stack Web Developer with a focus on Modern Front End Designs</h4>
            </div>
        </div>
    )
};

export default MainHeader;
