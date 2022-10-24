import React from 'react';
import './popup.css';

import {Container, Dialog, DialogContent, Button } from '@mui/material';

export function Popup({isOpen, handleClose, information}) {
	return (
		<Dialog open={isOpen} onClose={handleClose} maxWidth='md' fullWidth sx={{}}>
			<Container maxWidth='xl' disableGutters='true' sx={{display: 'flex', flexDirection: 'row',  }}>
				<DialogContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
					<Button variant='contained' sx={{margin:'30px 10px 20px', fontFamily: 'Titillium Web, monospace, serif'}}>Github Repo</Button>
					<Button variant='contained' sx={{margin:'20px 10px 30px', fontFamily: 'Titillium Web, monospace, serif'}}>Live Site</Button>
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
	)
};

