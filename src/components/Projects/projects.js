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
                <a href='https://seddboi.github.io/Save-A-Shot/'>
                    <div class='card p1' id='project-card'>
                        <img id='gif' src={saveshot} />
                        <div id='filter'>
                            <p id='card-text'>Save-A-Shot</p>
                        </div>
                    </div>
                </a>
                    
                <a href='https://seddboi.github.io/Thought-Machine/'>
                    <div class='card p2' id='project-card'>
                        <img id='gif' src={thoughtmachine} />
                        <div id='filter'>
                            <p id='card-text'>Thought Machine</p>
                        </div>                
                    </div>
                </a>

                <a href='https://seddboi.github.io/Random-Password-Creator/'>
                    <div class='card p3' id='project-card'>
                        <img id='gif' src={passwordgenerator} />
                        <div id='filter'>
                            <p id='card-text'>Password Generator</p>
                        </div>                
                    </div>
                </a>

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
