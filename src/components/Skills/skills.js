import React from 'react';
import './skills.css';
import ScrollAnimation from 'react-animate-on-scroll';

function Skills() {
    return (
        <div id='skills-wrapper'>
            <ScrollAnimation animateIn='bounce-left' >
                <div class='cell small-3 text-center left' id='card'>
                    <h3><strong>Client Side Strengths</strong></h3>
                    <div id='centered-list-1'>
                        <ul id='list'>
                            <li><strong>React.js</strong></li>
                            <li><strong>HTML5</strong></li>
                            <li><strong>CSS / Bootstrap / Foundation</strong></li>
                            <li><strong>Version Control / Git / Command Line</strong></li>
                        </ul>
                    </div>
                </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='bounce-right' >
                <div class='cell small-3 text-center right' id='card' >
                    <h3><strong>Server Side Strengths</strong></h3>
                    <div id='centered-list-2'>
                        <ul id='list'>
                            <li><strong>Node</strong></li>
                            <li><strong>Express</strong></li>
                            <li><strong>MySQL</strong></li>
                            <li><strong>Sequelize</strong></li>
                        </ul>
                    </div>
                    
                </div>
            </ScrollAnimation>
            
        </div>
    )
};

export default Skills;
