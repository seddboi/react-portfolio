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
			built: 'I took it upon myself to create a saved searches bar, to make it easier to track what cities you have searched. This was created using a state variable to contain the collection of searches. I then established a custom react hook to fetch the information from the FreeWeather API, meanwhile hiding the user keys on a small backend server. Once my data was collected, I then displayed it to the page, to provide all of the readouts you see after each search.\nTo host the project, I created a small backend server using node and express which allowed me to successfully hide the API key used to create fetches under my FreeWeather account, but allows anyone to utilize my application without having to enter in their own API key for functionality. To finalize my project, I then created a static copy of the React/Javascript portion of the front end and hosted it on the server. This was then updated to Heroku.',
			github: 'https://github.com/seddboi/Weathered',
			link: 'https://weathrd.herokuapp.com/'
		},
		'tm': {
			main: 'Simple Passing Thoughts application for all of the thoughts that you do not want to share!',
			tech: ['React', 'Custom React Hooks', 'Foundation by Zurb'],
			built: 'I started with the idea of testing my abilities in creating more efficient custom react hooks. To build on that skill, I began with the idea of "shower thoughts" and how they pass right through your mind and disappear forever. So thats what I got started on. I began creating the simple interface that was the search bar, and planned where the thoughts would be displayed after submission. I created a hook that would essentially take in the message being submitted, create a new object with a time key 15 seconds into the future, and an id key. This would allow me to establish a deletion button as well as allow me to set a timeout feature that would automatically delete the messages. Along with some simple state declarations, my project was complete; all of the project was done from my own javascript interpretation of native methods and practices I have learned.',
			github: 'https://github.com/seddboi/Thought-Machine',
			link: 'https://seddboi.github.io/Thought-Machine/'
		},
		'passgen': {
			main: 'Here for all of your random password making needs!',
			tech: ['React', 'Javascript', 'Material UI'],
			built: 'The password generator began with the idea of multiple choice system, from which I could select my options on the screen, then submit my selections. I began by establishing the text bar that would accept a number input from the user. Below the search bar, I placed the form that includes the possible options for a random password. Using state variables and many lines of jsx, I managed to efficiently maintain selections from the user. After creating the submission button for all of the entries, I created a popup feature using Material UI. This popup displayed the newly generated password, and also allowed you to copy the password to your clipboard, to be used elsewhere. Aside from the random password generation, I also created some user fault prevention to make certain the application does not break. ',
			github: 'https://github.com/seddboi/passwordinator',
			link: 'https://seddboi.github.io/passwordinator/'
		},
		'saveashot': {
			main: 'Vaccination Tracker and Vaccination Informational, pending the early stages of the COVID 19 Outbreak',
			tech: ['VaccinateCA API', 'OpenStreetMap API', 'Foundation by Zurb'],
			built: 'This project was a group project where I was assigned to develop the entire front end of the project. Every division, container, button, background, color, and design was all done by me. For a majority of the front end, I utilized components provided by Foundation by Zurb. This project\'s main goal was to serve as an informational in locating vaccinations for COVID 19 in California and providing informationals for every state on the vaccine and websites to schedule vaccines appointments.  ',
			github: 'https://github.com/seddboi/Save-A-Shot',
			link: 'https://seddboi.github.io/Save-A-Shot/'
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
