import React from 'react';
import './mainheader.css';
import ScrollAnimation from 'react-animate-on-scroll';

function MainHeader() {
    return (
        <div>
            <div className='diagonal'>
                <ScrollAnimation animateIn='name-animation'>
                    <h1><strong className='name'>
                        Gian Zamora
                    </strong></h1>
                </ScrollAnimation>
                <h4 className='content'>Full Stack Web Developer</h4>
            </div>
        </div>
    )
};

export default MainHeader;
