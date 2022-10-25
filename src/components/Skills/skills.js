import React from 'react';
import './skills.css';
import ScrollAnimation from 'react-animate-on-scroll';

function Skills() {
    return (
        <div id='skills-wrapper'>
            <ScrollAnimation animateIn='fade-in' >
                <div class='cell small-3 text-center left' id='card'>
                    <h3 id='skill-titles'><strong>Front End Strengths</strong></h3>
                    <div id='centered-list-1'>
                        <ul id='list'>
                            <li><strong>Javascript</strong></li>
                            <li><strong>HTML / CSS</strong></li>
                            <li><strong>Material UI / Bootstrap</strong></li>
                            <li><strong>Heroku</strong></li>
                        </ul>
                    </div>
                </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fade-in' >
                <div class='cell small-3 text-center right' id='card' >
                    <h3 id='skill-titles'><strong>Back End Strengths</strong></h3>
                    <div id='centered-list-2'>
                        <ul id='list'>
                            <li><strong>Node</strong></li>
                            <li><strong>Express</strong></li>
                            <li><strong>SQL</strong></li>
                        </ul>
                    </div>
                    
                </div>
            </ScrollAnimation>
            
        </div>
    )
};

export default Skills;
