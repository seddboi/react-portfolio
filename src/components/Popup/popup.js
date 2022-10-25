import React from 'react';
import './popup.css';

import {Container, Dialog, DialogContent, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export function Popup({isOpen, handleClose, information}) {

	const theme = createTheme({
		breakpoints: {
			values: {
				xxs: 0, // small phone
				xs: 300, // phone
				sm: 600, // tablets
				md: 900, // small laptop
				lg: 1200, // desktop
				xl: 1536 // large screens
			}
		},
		palette: {
			primary: {
				main: '#2E4053',
				light: '#34495E',
				dark: '#283747',
				contrastText: '#ffffff'
			}
		}
	})
	return (
		<ThemeProvider theme={theme}>
			<Dialog open={isOpen} onClose={handleClose} maxWidth='md' fullWidth sx={{}}>
			<Container maxWidth='xl' disableGutters='true' sx={{display: 'flex', flexDirection: 'column-reverse'}}>
				<DialogContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: '100%'}}>
					<Button variant='contained' href={information.github} sx={{margin:'20px 10px 20px', fontFamily: 'Titillium Web, monospace, serif'}}>Github Repo</Button>
					<Button variant='contained' href={information.link} sx={{margin:'20px 10px 20px', fontFamily: 'Titillium Web, monospace, serif'}}>Live Site</Button>
				</DialogContent>
				<DialogContent>
					<h5 className='subtitles'>Description:</h5>
					<p>{information.main}</p>
					<h5 className='subtitles'>Development Process:</h5>
					<p>{information.built}</p>				
					<h5 className='subtitles'>Main Technologies Used: </h5>
					<ol>{information.tech.map((item, i) => <li key={i} sx={{ display: 'list-item' }}>{item}</li>)}</ol>
				</DialogContent>
			</Container>
		</Dialog>
		</ThemeProvider>
	)
};

