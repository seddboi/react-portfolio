import React from 'react';
import './projects.css';

import saveshot from './gif/Save-A-Shot.gif';
import thoughtmachine from './gif/Thought-Machine.gif';
import passwordgenerator from './gif/Password Generator.gif';
import weathered from './gif/Weathered.gif';

function Projects() {
	return (
		<div class="projects-div">
			<h2 id="projects-title">
				<strong>Projects</strong>
			</h2>
			<div class="callout large row " id="projects-container">
				<div>
					<a href="https://weathrd.herokuapp.com/">
						<div class="card p3" id="project-card">
							<img id="gif" alt="gif image of Weathered" src={weathered} />
							<div id="filter">
								<p id="card-text">
									<span id="main-title">Weathered</span>
									<br /> The one stop weather application, for any of your mobile or desktop needs!
								</p>
								<p id="tech-text">
									<span id="tech-title">Technologies Used:</span>
									<br /> React
									<br /> Animate.css <br />
									FreeWeatherAPI
								</p>
							</div>
						</div>
					</a>
				</div>

				<div>
					<a href="https://seddboi.github.io/Thought-Machine/">
						<div class="card p2" id="project-card">
							<img id="gif" alt="gif image of Thought Machine" src={thoughtmachine} />
							<div id="filter">
								<p id="card-text">
									<span id="main-title">Thought Machine</span>
									<br /> Simple Passing Thoughts application for all of your thoughts not meant to
									be publicly shared!
								</p>
								<p id="tech-text">
									<span id="tech-title">Technologies Used:</span>
									<br /> React
									<br />
									Javascript( Moment.js, React Hooks )<br />
									HTML & CSS
								</p>
							</div>
						</div>
					</a>
				</div>

				<div>
					<a href="https://seddboi.github.io/passwordinator/">
						<div class="card p3" id="project-card">
							<img id="gif" alt="gif image of Password Generator" src={passwordgenerator} />
							<div id="filter">
								<p id="card-text">
									<span id="main-title">Password Generator</span>
									<br /> Here for all of your random password making needs!
								</p>
								<p id="tech-text">
									<span id="tech-title">Technologies Used:</span>
									<br /> React
									<br /> Javascript
									<br /> Material UI
								</p>
							</div>
						</div>
					</a>
				</div>

				<div>
					<a href="https://seddboi.github.io/Save-A-Shot/">
						<div class="card p1" id="project-card">
							<img id="gif" alt="gif image of Save-A-Shot" src={saveshot} />
							<div id="filter">
								<p id="card-text">
									<span id="main-title">Save-A-Shot</span>
									<br /> Vaccination Tracker and Vaccination Informational, pending the early stages
									of the COVID 19 Outbreak
								</p>
								<p id="tech-text">
									<span id="tech-title">Technologies Used:</span>
									<br />
									VaccinateCA API
									<br />
									OpenStreetMap API
									<br />
									Foundation by Zurb Framework
									<br />{' '}
								</p>
							</div>
						</div>
					</a>
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
