import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import MessageIcon from '@material-ui/icons/Message';
import SearchIcon from '@material-ui/icons/Search';

const chats = [
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
	{ img: require('./avatar.jpg'), name: 'Janderson Angelo', lastMsg: 'coe rapaziada'},
]

class Main extends Component {
	render() {
		return (
			<Grid container style={{ maxHeight: '100vh' }}>
				<Grid container item xs={4} style={{ height: '100%' }}>
					<header style={{ height: 59, width: '100%', backgroundColor: '#eeeeee', boxShadow: '2px 1px rgba(0,0,0,0.12)' }}>
						<Grid container alignItems="center" style={{ height: '100%', padding: "10px 16px" }}>
							{/* TODO: MAKE IT A LINK */}
							<Avatar src={require('./avatar.jpg')} />
							<div style={{ marginLeft: 'auto'}}>
								<IconButton>
									<MessageIcon style={{ fill: '#263238', fillOpacity: '0.6' }}/>
								</IconButton>
								<IconButton style={{ marginLeft: 10 }}>
									<MoreVertIcon style={{ fill: '#263238', fillOpacity: '0.6' }}/>
								</IconButton>
							</div>
						</Grid>
					</header>
					<Grid container alignItems="center" style={{ height: 49, backgroundColor: '#f0f0f0', opacity: 0.7, boxShadow: '0 1px rgba(0,0,0,0.12)', padding: "10px 7px" }}>
						<label style={{ height: '100%', width: '100%', border: '1px solid #e0e0e0', backgroundColor: '#fbfbfb', borderRadius: 5 }}>
							<Grid container direction="row" alignItems="center" wrap="nowrap" style={{ height: '100%', paddingLeft: 15 }}>
								<ButtonBase style={{ marginRight: 25 }}>
									<SearchIcon style={{ fontSize: 16, fill: '#263238', fillOpacity: '0.6' }} />
								</ButtonBase>
								<input placeholder="Procurar ou começar uma nova conversa" style={{ height: '100%', width: '100%', outline: 'none', border: 'none' }}/>
							</Grid>
						</label>
					</Grid>
					<Grid container direction="row" style={{ maxHeight: 'calc(100vh - 108px)', overflow: 'auto' }}>
						{chats.map(chat => (
							<ButtonBase disableRipple component={Grid} container direction="row" wrap="nowrap" alignItems="center" style={{ height: 72, maxWidth: '100%', overflow: 'hidden' }}>
								<div style={{ width: 68, paddingLeft: 13, paddingRight: 15 }}>
									<Avatar src={chat.img} />
								</div>
								<Grid container direction="row" style={{ height: '100%', maxWidth: 'calc(100% - 68px)', borderTop: '1px solid #f2f2f2', paddingRight: 15, paddingTop: 10 }}>
									<Grid container direction="row">
										<Typography noWrap style={{ fontSize: 15, fontWeight: 400 }}>
											{chat.name}
										</Typography>
									</Grid>
								</Grid>
							</ButtonBase>
						))}
					</Grid>
				</Grid>
				<Grid item xs={8} style={{ height: '100vh', backgroundColor: 'purple'}}>
					ola
				</Grid>
			</Grid>
		);
	}
}

export default Main;