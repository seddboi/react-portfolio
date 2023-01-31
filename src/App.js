import React from 'react';
import MainHeader from './components/MainHeader/mainheader';
import Bio from './components/Bio/bio';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact-me';
import './App.css';

function App() {
	return (
		<div>
			<MainHeader />
			<Bio />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
