import React from 'react';
import './wrapper.css';
import MainHeader from '../MainHeader/mainheader';
import Bio from '../Bio/bio';
import Skills from '../Skills/skills';
import Projects from '../Projects/projects';
import Contact from '../Contact/contact-me';

function Wrapper() {
    return (
        <div>
            <MainHeader />
            <Bio />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Wrapper;
