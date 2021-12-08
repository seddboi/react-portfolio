import React from 'react';
import './projects.css';

import saveshot from './gif/Save-A-Shot.gif';
import thoughtmachine from './gif/Thought-Machine.gif';
import passwordgenerator from './gif/Password Generator.gif';

function Projects() {
    return (
        <div class='projects-div'>
            <h2 id='projects-title'><strong>Projects</strong></h2>
            <div class='callout large row ' id='projects-container'>
                <div>
                    <a href='https://seddboi.github.io/Save-A-Shot/'>
                        <div class='card p1' id='project-card'>
                            <img id='gif' alt='gif image of Save-A-Shot' src={saveshot} />
                            <div id='filter'>
                                <p id='card-text'><span id='main-title'>Save-A-Shot</span><br/> Vaccination Tracker and Vaccination Informational, pending the early stages of the COVID 19 Outbreak</p>
                            </div>
                        </div>
                    </a>
                </div>
                
                <div>
                    <a href='https://seddboi.github.io/Thought-Machine/'>
                        <div class='card p2' id='project-card'>
                            <img id='gif' alt='gif image of Thought Machine' src={thoughtmachine} />
                            <div id='filter'>
                            <p id='card-text'><span id='main-title'>Thought Machine</span><br/> Simple Passing Thoughts application for all of your thoughts not meant to be publicly shared!</p>
                            </div>                
                        </div>
                    </a>
                </div>  
                
                <div>
                    <a href='https://seddboi.github.io/Random-Password-Creator/'>
                        <div class='card p3' id='project-card'>
                            <img id='gif' alt='gif image of Password Generator' src={passwordgenerator} />
                            <div id='filter'>
                            <p id='card-text'><span id='main-title'>Password Generator</span><br/> Upper Case, Lower Case, Numbers, and Special Characters... this generator has it all!</p>
                            </div>                
                        </div>
                    </a>
                </div>
                
                {/* <div class='card p4' id='project-card'>
                <img id='gif' src={saveshot} />
                    <div id='filter'>
                        <p id='card-text'>Save-A-Shot</p>
                    </div>                
                </div> */}

                {/* <div class='card p5' id='project-card'>
                <img id='gif' src={saveshot} />
                    <div id='filter'>
                        <p id='card-text'>Save-A-Shot</p>
                    </div>                
                </div>

                <div class='card p6' id='project-card'>
                <img id='gif' src={saveshot} />
                    <div id='filter'>
                        <p id='card-text'>Save-A-Shot</p>
                    </div>                
                </div> */}
                
            </div>
        </div>
    )
};

export default Projects;
