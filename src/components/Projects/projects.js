import React, {useState} from 'react';
import './projects.css';

import saveshot from './gif/Save-A-Shot.gif';
import thoughtmachine from './gif/Thought-Machine.gif';
import passwordgenerator from './gif/Password Generator.gif';
import weathered from './gif/Weathered.gif';

import {Popup} from '../Popup/popup.js'

function Projects() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState('weathered');

	const handleOpen = () => {
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
	}

	const projectInfo = {
		'weathered': {
			main:'The one stop weather application, for any of your mobile or desktop needs!',
			tech: ['React', 'Animate.css', 'FreeWeather API'],
			built: 'This project was built with the mindset that most weather appliocations were overly complicated. Many programs available provide much unecessary information for the common user, so I aimed to produce a program that was straight forward.'
		},
		'tm': {
			main: 'Simple Passing Thoughts application for all of your thoughts not meant to be publicly shared!',
			tech: ['React', 'Custom React Hooks'],
			built: ''
		},
		'passgen': {
			main: 'Here for all of your random password making needs!',
			tech: ['React', 'Javascript', 'Material UI'],
			built: ''
		},
		'saveashot': {
			main: 'Vaccination Tracker and Vaccination Informational, pending the early stages of the COVID 19 Outbreak',
			tech: ['VaccinateCA API', 'OpenStreetMap API', 'Foundation by Zurb'],
			built: ''
		}
	};

	return (
		<div class="projects-div">
			<h2 id="projects-title">
				<strong>Projects</strong>
			</h2>

			<div class="callout large row " id="projects-container">
				<Popup isOpen={isOpen} handleClose={handleClose} information={projectInfo[selectedProject]} />
				<div class="card p3" id="project-card">
					<img id="gif" alt="Weathered App Preview" src={weathered} />
					<div id="filter" onClick={() => {
						setSelectedProject('weathered');
						handleOpen();
					}}>
						<h1 id="main-title">Weathered</h1>
					</div>
				</div>

				
				<div class="card p2" id="project-card">
					<img id="gif" alt="Thought Machine preview" src={thoughtmachine} />
					<div id="filter" onClick={() => {
						setSelectedProject('tm');
						handleOpen();
					}}>
						<h1 id="main-title">Thought Machine</h1>
					</div>
				</div>

					<div class="card p3" id="project-card">
						<img id="gif" alt="Password Generator Preview" src={passwordgenerator} />
						<div id="filter" onClick={() => {
							setSelectedProject('passgen');
							handleOpen();
						}}>
							<h1 id="main-title">Password Generator</h1>
						</div>
					</div>

				
					<div class="card p1" id="project-card">
						<img id="gif" alt="Save-A-Shot Preview" src={saveshot} />
						<div id="filter" onClick={() => {
							setSelectedProject('saveashot');
							handleOpen();
						}}>
								<h1 id="main-title">Save-A-Shot</h1>
						</div>
					</div>

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
	);
}

export default Projects;
