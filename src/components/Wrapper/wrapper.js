import React from 'react';
import './wrapper.css';
import MainHeader from '../MainHeader/mainheader';
import Bio from '../Bio/bio';
import Skills from '../Skills/skills';

function Wrapper() {
    return (
        <div>
            <MainHeader />
            <Bio />
            <Skills />
        </div>
    )
}

export default Wrapper;
